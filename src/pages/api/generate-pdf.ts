import type { APIRoute } from 'astro';
// @ts-ignore
import PDFDocument from 'pdfkit';
import { getState } from '../../data/states';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const {
      noticeType,
      state,
      landlordName,
      landlordAddress,
      tenantName,
      propertyAddress,
      cityStateZip,
      noticeDate,
      rentAmount,
      rentPeriod,
      rentDueDate,
      violationReason,
      vacateByDate,
    } = data;

    const stateInfo = getState(state);
    const noticeInfo = stateInfo?.notices[noticeType as keyof typeof stateInfo.notices];

    const chunks: Buffer[] = [];
    const doc = new PDFDocument({
      size: 'LETTER',
      margins: { top: 72, bottom: 72, left: 72, right: 72 },
      bufferPages: true,
    });

    doc.on('data', (chunk: Buffer) => chunks.push(chunk));

    await new Promise<void>((resolve) => {
      doc.on('end', resolve);

      // Header
      doc
        .fontSize(12)
        .font('Helvetica-Bold')
        .text(`STATE OF ${stateInfo?.name.toUpperCase() || state}`, { align: 'center' });
      doc.moveDown(0.5);

      // Title
      const titles: Record<string, string> = {
        payOrQuit: 'NOTICE TO PAY RENT OR QUIT',
        unconditionalQuit: 'UNCONDITIONAL NOTICE TO QUIT',
        nonRenewal: 'NOTICE OF NON-RENEWAL OF LEASE',
        noticeToVacate: 'NOTICE TO VACATE',
      };
      doc
        .fontSize(14)
        .font('Helvetica-Bold')
        .text(titles[noticeType] || 'EVICTION NOTICE', { align: 'center', underline: true });
      doc.moveDown(1);

      // Date
      doc.fontSize(11).font('Helvetica').text(`Date: ${noticeDate}`);
      doc.moveDown(0.5);

      // To block
      doc.text(`To: ${tenantName}`);
      doc.text(propertyAddress);
      doc.text(cityStateZip);
      doc.moveDown(1);

      // Body text per notice type
      if (noticeType === 'payOrQuit') {
        doc.text(
          `PLEASE TAKE NOTICE that you are hereby required to pay the sum of $${rentAmount} representing rent for the period of ${rentPeriod}, which is now due and owing for the premises located at ${propertyAddress}, ${cityStateZip}, or to quit and deliver up possession of said premises within ${noticeInfo?.days || 3} days after service of this notice.`
        );
        doc.moveDown(0.5);
        doc.text(
          `If you fail to pay the rent or vacate the premises within ${noticeInfo?.days || 3} days, legal proceedings will be instituted against you to recover possession of the premises, declare the rental agreement forfeited, and recover all damages and court costs.`
        );
        doc.moveDown(0.5);
        doc.text(`This notice is served pursuant to ${noticeInfo?.statute || 'applicable state law'}.`);
      } else if (noticeType === 'nonRenewal') {
        doc.text(
          `PLEASE TAKE NOTICE that your tenancy of the premises located at ${propertyAddress}, ${cityStateZip} will not be renewed upon expiration of your current lease term. You are hereby required to vacate and surrender possession of the premises on or before ${vacateByDate}, which is ${noticeInfo?.days || 30} days from the date of service of this notice.`
        );
        doc.moveDown(0.5);
        doc.text(`This notice is given pursuant to ${noticeInfo?.statute || 'applicable state law'}.`);
      } else if (noticeType === 'unconditionalQuit') {
        doc.text(
          `PLEASE TAKE NOTICE that you are hereby required to quit and deliver up possession of the premises located at ${propertyAddress}, ${cityStateZip} within ${noticeInfo?.days || 3} days after service of this notice.`
        );
        doc.moveDown(0.5);
        if (violationReason) {
          doc.text(`The reason for this notice is: ${violationReason}`);
          doc.moveDown(0.5);
        }
        doc.text(`This notice is given pursuant to ${noticeInfo?.statute || 'applicable state law'}.`);
      } else if (noticeType === 'noticeToVacate') {
        doc.text(
          `PLEASE TAKE NOTICE that your month-to-month tenancy of the premises located at ${propertyAddress}, ${cityStateZip} is hereby terminated. You are required to vacate and surrender possession of the premises on or before ${vacateByDate}, which is ${noticeInfo?.days || 30} days from the date of service of this notice.`
        );
        doc.moveDown(0.5);
        doc.text(`This notice is given pursuant to ${noticeInfo?.statute || 'applicable state law'}.`);
      }

      doc.moveDown(1.5);

      // Signature block
      doc.text(`Dated this ${noticeDate}.`);
      doc.moveDown(2);
      doc.text('_______________________________');
      doc.text(landlordName);
      doc.text('Landlord / Property Owner');
      doc.text(landlordAddress, { width: doc.page.width - 144 });

      // Certificate of Service page
      doc.addPage();
      doc
        .fontSize(12)
        .font('Helvetica-Bold')
        .text('CERTIFICATE OF SERVICE', { align: 'center' });
      doc.moveDown(1);
      doc
        .fontSize(11)
        .font('Helvetica')
        .text(
          `I, ${landlordName}, certify that on ${noticeDate}, I served the foregoing notice upon ${tenantName} by:`
        );
      doc.moveDown(0.5);
      doc.text('[ ]  Personal delivery to tenant');
      doc.text('[ ]  Leaving with a person of suitable age and discretion at the premises');
      doc.text('[ ]  Posting on the premises AND mailing via first-class mail');
      doc.text('[ ]  Certified mail, return receipt requested');
      doc.moveDown(0.3);
      doc.fontSize(9).font('Helvetica').fillColor('#6B7280')
         .text('(Check the applicable method after serving this notice)', { align: 'center' });
      doc.fillColor('#000000').fontSize(11).font('Helvetica');
      doc.moveDown(2);
      doc.text('_______________________________          ________________');
      doc.text('Signature                                               Date');

      // Footer on all pages
      const pages = doc.bufferedPageRange();
      for (let i = 0; i < pages.count; i++) {
        doc.switchToPage(pages.start + i);
        doc
          .fontSize(8)
          .fillColor('#9CA3AF')
          .text(
            'EvictionNoticeGenerator.com — Template only. Verify all requirements with an attorney before serving.',
            72,
            doc.page.height - 40,
            { align: 'center', width: doc.page.width - 144 }
          );
      }

      doc.end();
    });

    const pdfBuffer = Buffer.concat(chunks);

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="eviction-notice-${state}-${Date.now()}.pdf"`,
        'Content-Length': pdfBuffer.length.toString(),
      },
    });
  } catch (err) {
    console.error('PDF generation error:', err);
    return new Response(JSON.stringify({ error: 'Failed to generate PDF' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
