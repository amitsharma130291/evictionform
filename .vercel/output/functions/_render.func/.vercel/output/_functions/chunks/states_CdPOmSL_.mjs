const stateData = [
  {
    name: "Alabama",
    code: "AL",
    notices: {
      payOrQuit: { days: 7, statute: "Ala. Code §35-9A-421" },
      unconditionalQuit: { days: 7, statute: "Ala. Code §35-9A-421" },
      nonRenewal: { days: 30, statute: "Ala. Code §35-9A-441" },
      noticeToVacate: { days: 30, statute: "Ala. Code §35-9A-441" }
    }
  },
  {
    name: "Alaska",
    code: "AK",
    notices: {
      payOrQuit: { days: 7, statute: "AS 34.03.220" },
      unconditionalQuit: { days: 5, statute: "AS 34.03.220" },
      nonRenewal: { days: 30, statute: "AS 34.03.290" },
      noticeToVacate: { days: 30, statute: "AS 34.03.290" }
    }
  },
  {
    name: "Arizona",
    code: "AZ",
    notices: {
      payOrQuit: { days: 5, statute: "ARS §33-1368" },
      unconditionalQuit: { days: 10, statute: "ARS §33-1368" },
      nonRenewal: { days: 30, statute: "ARS §33-1375" },
      noticeToVacate: { days: 30, statute: "ARS §33-1375" }
    }
  },
  {
    name: "Arkansas",
    code: "AR",
    notices: {
      payOrQuit: { days: 3, statute: "ACA §18-60-304" },
      unconditionalQuit: { days: 14, statute: "ACA §18-60-304" },
      nonRenewal: { days: 30, statute: "ACA §18-17-704" },
      noticeToVacate: { days: 30, statute: "ACA §18-17-704" }
    }
  },
  {
    name: "California",
    code: "CA",
    notices: {
      payOrQuit: { days: 3, statute: "CCP §1161" },
      unconditionalQuit: { days: 3, statute: "CCP §1161" },
      nonRenewal: { days: 60, statute: "CCP §1946.1" },
      noticeToVacate: { days: 60, statute: "CCP §1946.1" }
    }
  },
  {
    name: "Colorado",
    code: "CO",
    notices: {
      payOrQuit: { days: 10, statute: "CRS §13-40-104" },
      unconditionalQuit: { days: 10, statute: "CRS §13-40-104" },
      nonRenewal: { days: 91, statute: "CRS §38-12-1303" },
      noticeToVacate: { days: 30, statute: "CRS §13-40-107" }
    }
  },
  {
    name: "Connecticut",
    code: "CT",
    notices: {
      payOrQuit: { days: 3, statute: "CGS §47a-23" },
      unconditionalQuit: { days: 15, statute: "CGS §47a-23" },
      nonRenewal: { days: 90, statute: "CGS §47a-23c" },
      noticeToVacate: { days: 90, statute: "CGS §47a-23c" }
    }
  },
  {
    name: "Delaware",
    code: "DE",
    notices: {
      payOrQuit: { days: 5, statute: "25 Del. C. §5501" },
      unconditionalQuit: { days: 7, statute: "25 Del. C. §5513" },
      nonRenewal: { days: 60, statute: "25 Del. C. §5106" },
      noticeToVacate: { days: 60, statute: "25 Del. C. §5106" }
    }
  },
  {
    name: "Florida",
    code: "FL",
    notices: {
      payOrQuit: { days: 3, statute: "FS §83.56" },
      unconditionalQuit: { days: 7, statute: "FS §83.56" },
      nonRenewal: { days: 60, statute: "FS §83.575" },
      noticeToVacate: { days: 15, statute: "FS §83.57" }
    }
  },
  {
    name: "Georgia",
    code: "GA",
    notices: {
      payOrQuit: { days: 7, statute: "OCGA §44-7-50" },
      unconditionalQuit: { days: 60, statute: "OCGA §44-7-50" },
      nonRenewal: { days: 60, statute: "OCGA §44-7-7" },
      noticeToVacate: { days: 60, statute: "OCGA §44-7-7" }
    }
  },
  {
    name: "Hawaii",
    code: "HI",
    notices: {
      payOrQuit: { days: 5, statute: "HRS §521-68" },
      unconditionalQuit: { days: 10, statute: "HRS §521-68" },
      nonRenewal: { days: 45, statute: "HRS §521-71" },
      noticeToVacate: { days: 45, statute: "HRS §521-71" }
    }
  },
  {
    name: "Idaho",
    code: "ID",
    notices: {
      payOrQuit: { days: 3, statute: "Idaho Code §6-303" },
      unconditionalQuit: { days: 3, statute: "Idaho Code §6-303" },
      nonRenewal: { days: 30, statute: "Idaho Code §55-208" },
      noticeToVacate: { days: 30, statute: "Idaho Code §55-208" }
    }
  },
  {
    name: "Illinois",
    code: "IL",
    notices: {
      payOrQuit: { days: 5, statute: "735 ILCS 5/9-209" },
      unconditionalQuit: { days: 10, statute: "735 ILCS 5/9-210" },
      nonRenewal: { days: 30, statute: "735 ILCS 5/9-207" },
      noticeToVacate: { days: 30, statute: "735 ILCS 5/9-207" }
    }
  },
  {
    name: "Indiana",
    code: "IN",
    notices: {
      payOrQuit: { days: 10, statute: "IC 32-31-1-6" },
      unconditionalQuit: { days: 45, statute: "IC 32-31-1-6" },
      nonRenewal: { days: 30, statute: "IC 32-31-1-1" },
      noticeToVacate: { days: 30, statute: "IC 32-31-1-1" }
    }
  },
  {
    name: "Iowa",
    code: "IA",
    notices: {
      payOrQuit: { days: 3, statute: "Iowa Code §562A.27" },
      unconditionalQuit: { days: 7, statute: "Iowa Code §562A.27A" },
      nonRenewal: { days: 30, statute: "Iowa Code §562A.34" },
      noticeToVacate: { days: 30, statute: "Iowa Code §562A.34" }
    }
  },
  {
    name: "Kansas",
    code: "KS",
    notices: {
      payOrQuit: { days: 3, statute: "KSA §58-2564" },
      unconditionalQuit: { days: 30, statute: "KSA §58-2564" },
      nonRenewal: { days: 30, statute: "KSA §58-2570" },
      noticeToVacate: { days: 30, statute: "KSA §58-2570" }
    }
  },
  {
    name: "Kentucky",
    code: "KY",
    notices: {
      payOrQuit: { days: 7, statute: "KRS §383.660" },
      unconditionalQuit: { days: 14, statute: "KRS §383.660" },
      nonRenewal: { days: 30, statute: "KRS §383.695" },
      noticeToVacate: { days: 30, statute: "KRS §383.695" }
    }
  },
  {
    name: "Louisiana",
    code: "LA",
    notices: {
      payOrQuit: { days: 5, statute: "La. R.S. 9:3259" },
      unconditionalQuit: { days: 5, statute: "La. R.S. 9:3259" },
      nonRenewal: { days: 10, statute: "La. C.C. art. 2728" },
      noticeToVacate: { days: 10, statute: "La. C.C. art. 2728" }
    }
  },
  {
    name: "Maine",
    code: "ME",
    notices: {
      payOrQuit: { days: 7, statute: "14 M.R.S. §6002" },
      unconditionalQuit: { days: 7, statute: "14 M.R.S. §6002" },
      nonRenewal: { days: 30, statute: "14 M.R.S. §6002" },
      noticeToVacate: { days: 30, statute: "14 M.R.S. §6002" }
    }
  },
  {
    name: "Maryland",
    code: "MD",
    notices: {
      payOrQuit: { days: 4, statute: "Md. Code RP §8-401" },
      unconditionalQuit: { days: 30, statute: "Md. Code RP §8-402" },
      nonRenewal: { days: 60, statute: "Md. Code RP §8-402" },
      noticeToVacate: { days: 60, statute: "Md. Code RP §8-402" }
    }
  },
  {
    name: "Massachusetts",
    code: "MA",
    notices: {
      payOrQuit: { days: 14, statute: "MGL c.186 §11" },
      unconditionalQuit: { days: 30, statute: "MGL c.186 §12" },
      nonRenewal: { days: 30, statute: "MGL c.186 §12" },
      noticeToVacate: { days: 30, statute: "MGL c.186 §12" }
    }
  },
  {
    name: "Michigan",
    code: "MI",
    notices: {
      payOrQuit: { days: 7, statute: "MCL §554.134" },
      unconditionalQuit: { days: 30, statute: "MCL §554.134" },
      nonRenewal: { days: 30, statute: "MCL §554.134" },
      noticeToVacate: { days: 30, statute: "MCL §554.134" }
    }
  },
  {
    name: "Minnesota",
    code: "MN",
    notices: {
      payOrQuit: { days: 14, statute: "Minn. Stat. §504B.135" },
      unconditionalQuit: { days: 14, statute: "Minn. Stat. §504B.135" },
      nonRenewal: { days: 90, statute: "Minn. Stat. §504B.135" },
      noticeToVacate: { days: 90, statute: "Minn. Stat. §504B.135" }
    }
  },
  {
    name: "Mississippi",
    code: "MS",
    notices: {
      payOrQuit: { days: 3, statute: "Miss. Code §89-7-27" },
      unconditionalQuit: { days: 30, statute: "Miss. Code §89-7-27" },
      nonRenewal: { days: 30, statute: "Miss. Code §89-8-19" },
      noticeToVacate: { days: 30, statute: "Miss. Code §89-8-19" }
    }
  },
  {
    name: "Missouri",
    code: "MO",
    notices: {
      payOrQuit: { days: 5, statute: "Mo. Rev. Stat. §535.020" },
      unconditionalQuit: { days: 10, statute: "Mo. Rev. Stat. §535.020" },
      nonRenewal: { days: 30, statute: "Mo. Rev. Stat. §441.060" },
      noticeToVacate: { days: 30, statute: "Mo. Rev. Stat. §441.060" }
    }
  },
  {
    name: "Montana",
    code: "MT",
    notices: {
      payOrQuit: { days: 3, statute: "MCA §70-24-422" },
      unconditionalQuit: { days: 14, statute: "MCA §70-24-422" },
      nonRenewal: { days: 30, statute: "MCA §70-24-441" },
      noticeToVacate: { days: 30, statute: "MCA §70-24-441" }
    }
  },
  {
    name: "Nebraska",
    code: "NE",
    notices: {
      payOrQuit: { days: 7, statute: "Neb. Rev. Stat. §76-1431" },
      unconditionalQuit: { days: 30, statute: "Neb. Rev. Stat. §76-1431" },
      nonRenewal: { days: 30, statute: "Neb. Rev. Stat. §76-1437" },
      noticeToVacate: { days: 30, statute: "Neb. Rev. Stat. §76-1437" }
    }
  },
  {
    name: "Nevada",
    code: "NV",
    notices: {
      payOrQuit: { days: 7, statute: "NRS §40.253" },
      unconditionalQuit: { days: 3, statute: "NRS §40.2516" },
      nonRenewal: { days: 30, statute: "NRS §40.251" },
      noticeToVacate: { days: 30, statute: "NRS §40.251" }
    }
  },
  {
    name: "New Hampshire",
    code: "NH",
    notices: {
      payOrQuit: { days: 7, statute: "NH RSA §540:3" },
      unconditionalQuit: { days: 30, statute: "NH RSA §540:3" },
      nonRenewal: { days: 30, statute: "NH RSA §540:3" },
      noticeToVacate: { days: 30, statute: "NH RSA §540:3" }
    }
  },
  {
    name: "New Jersey",
    code: "NJ",
    notices: {
      payOrQuit: { days: 30, statute: "NJSA 2A:18-61.1" },
      unconditionalQuit: { days: 30, statute: "NJSA 2A:18-61.2" },
      nonRenewal: { days: 30, statute: "NJSA 2A:18-61.2" },
      noticeToVacate: { days: 30, statute: "NJSA 2A:18-61.2" }
    }
  },
  {
    name: "New Mexico",
    code: "NM",
    notices: {
      payOrQuit: { days: 3, statute: "NMSA §47-8-33" },
      unconditionalQuit: { days: 7, statute: "NMSA §47-8-33" },
      nonRenewal: { days: 30, statute: "NMSA §47-8-37" },
      noticeToVacate: { days: 30, statute: "NMSA §47-8-37" }
    }
  },
  {
    name: "New York",
    code: "NY",
    notices: {
      payOrQuit: { days: 14, statute: "RPL §711" },
      unconditionalQuit: { days: 30, statute: "RPL §711" },
      nonRenewal: { days: 90, statute: "RPL §226-c" },
      noticeToVacate: { days: 30, statute: "RPL §226-c" }
    }
  },
  {
    name: "North Carolina",
    code: "NC",
    notices: {
      payOrQuit: { days: 10, statute: "NC Gen. Stat. §42-3" },
      unconditionalQuit: { days: 30, statute: "NC Gen. Stat. §42-26" },
      nonRenewal: { days: 7, statute: "NC Gen. Stat. §42-14" },
      noticeToVacate: { days: 7, statute: "NC Gen. Stat. §42-14" }
    }
  },
  {
    name: "North Dakota",
    code: "ND",
    notices: {
      payOrQuit: { days: 3, statute: "ND Cent. Code §47-32-01" },
      unconditionalQuit: { days: 3, statute: "ND Cent. Code §47-32-01" },
      nonRenewal: { days: 30, statute: "ND Cent. Code §47-16-15" },
      noticeToVacate: { days: 30, statute: "ND Cent. Code §47-16-15" }
    }
  },
  {
    name: "Ohio",
    code: "OH",
    notices: {
      payOrQuit: { days: 3, statute: "ORC §1923.02" },
      unconditionalQuit: { days: 30, statute: "ORC §5321.17" },
      nonRenewal: { days: 30, statute: "ORC §5321.17" },
      noticeToVacate: { days: 30, statute: "ORC §5321.17" }
    }
  },
  {
    name: "Oklahoma",
    code: "OK",
    notices: {
      payOrQuit: { days: 5, statute: "41 O.S. §131" },
      unconditionalQuit: { days: 15, statute: "41 O.S. §132" },
      nonRenewal: { days: 30, statute: "41 O.S. §111" },
      noticeToVacate: { days: 30, statute: "41 O.S. §111" }
    }
  },
  {
    name: "Oregon",
    code: "OR",
    notices: {
      payOrQuit: { days: 10, statute: "ORS §90.394" },
      unconditionalQuit: { days: 30, statute: "ORS §90.396" },
      nonRenewal: { days: 90, statute: "ORS §90.427" },
      noticeToVacate: { days: 30, statute: "ORS §90.427" }
    }
  },
  {
    name: "Pennsylvania",
    code: "PA",
    notices: {
      payOrQuit: { days: 10, statute: "68 P.S. §250.501" },
      unconditionalQuit: { days: 15, statute: "68 P.S. §250.505" },
      nonRenewal: { days: 15, statute: "68 P.S. §250.501" },
      noticeToVacate: { days: 15, statute: "68 P.S. §250.501" }
    }
  },
  {
    name: "Rhode Island",
    code: "RI",
    notices: {
      payOrQuit: { days: 5, statute: "RI Gen. Laws §34-18-35" },
      unconditionalQuit: { days: 20, statute: "RI Gen. Laws §34-18-36" },
      nonRenewal: { days: 30, statute: "RI Gen. Laws §34-18-37" },
      noticeToVacate: { days: 30, statute: "RI Gen. Laws §34-18-37" }
    }
  },
  {
    name: "South Carolina",
    code: "SC",
    notices: {
      payOrQuit: { days: 5, statute: "SC Code §27-40-710" },
      unconditionalQuit: { days: 14, statute: "SC Code §27-40-710" },
      nonRenewal: { days: 30, statute: "SC Code §27-40-770" },
      noticeToVacate: { days: 30, statute: "SC Code §27-40-770" }
    }
  },
  {
    name: "South Dakota",
    code: "SD",
    notices: {
      payOrQuit: { days: 3, statute: "SDCL §43-32-13" },
      unconditionalQuit: { days: 3, statute: "SDCL §43-32-13" },
      nonRenewal: { days: 30, statute: "SDCL §43-32-15" },
      noticeToVacate: { days: 30, statute: "SDCL §43-32-15" }
    }
  },
  {
    name: "Tennessee",
    code: "TN",
    notices: {
      payOrQuit: { days: 14, statute: "TCA §66-28-505" },
      unconditionalQuit: { days: 30, statute: "TCA §66-28-505" },
      nonRenewal: { days: 30, statute: "TCA §66-28-512" },
      noticeToVacate: { days: 30, statute: "TCA §66-28-512" }
    }
  },
  {
    name: "Texas",
    code: "TX",
    notices: {
      payOrQuit: { days: 3, statute: "Tex. Prop. Code §24.005" },
      unconditionalQuit: { days: 3, statute: "Tex. Prop. Code §24.005" },
      nonRenewal: { days: 30, statute: "Tex. Prop. Code §91.001" },
      noticeToVacate: { days: 30, statute: "Tex. Prop. Code §91.001" }
    }
  },
  {
    name: "Utah",
    code: "UT",
    notices: {
      payOrQuit: { days: 3, statute: "UCA §78B-6-802" },
      unconditionalQuit: { days: 3, statute: "UCA §78B-6-802" },
      nonRenewal: { days: 15, statute: "UCA §78B-6-802" },
      noticeToVacate: { days: 15, statute: "UCA §78B-6-802" }
    }
  },
  {
    name: "Vermont",
    code: "VT",
    notices: {
      payOrQuit: { days: 14, statute: "9 V.S.A. §4467" },
      unconditionalQuit: { days: 30, statute: "9 V.S.A. §4467" },
      nonRenewal: { days: 90, statute: "9 V.S.A. §4467" },
      noticeToVacate: { days: 90, statute: "9 V.S.A. §4467" }
    }
  },
  {
    name: "Virginia",
    code: "VA",
    notices: {
      payOrQuit: { days: 5, statute: "Va. Code §55.1-1245" },
      unconditionalQuit: { days: 30, statute: "Va. Code §55.1-1245" },
      nonRenewal: { days: 60, statute: "Va. Code §55.1-1253" },
      noticeToVacate: { days: 60, statute: "Va. Code §55.1-1253" }
    }
  },
  {
    name: "Washington",
    code: "WA",
    notices: {
      payOrQuit: { days: 14, statute: "RCW §59.12.030" },
      unconditionalQuit: { days: 10, statute: "RCW §59.12.030" },
      nonRenewal: { days: 20, statute: "RCW §59.18.650" },
      noticeToVacate: { days: 20, statute: "RCW §59.18.650" }
    }
  },
  {
    name: "West Virginia",
    code: "WV",
    notices: {
      payOrQuit: { days: 5, statute: "WV Code §37-6-5" },
      unconditionalQuit: { days: 30, statute: "WV Code §37-6-5" },
      nonRenewal: { days: 30, statute: "WV Code §37-6-5" },
      noticeToVacate: { days: 30, statute: "WV Code §37-6-5" }
    }
  },
  {
    name: "Wisconsin",
    code: "WI",
    notices: {
      payOrQuit: { days: 5, statute: "Wis. Stat. §704.17" },
      unconditionalQuit: { days: 14, statute: "Wis. Stat. §704.17" },
      nonRenewal: { days: 28, statute: "Wis. Stat. §704.19" },
      noticeToVacate: { days: 28, statute: "Wis. Stat. §704.19" }
    }
  },
  {
    name: "Wyoming",
    code: "WY",
    notices: {
      payOrQuit: { days: 3, statute: "Wyo. Stat. §1-21-1002" },
      unconditionalQuit: { days: 3, statute: "Wyo. Stat. §1-21-1002" },
      nonRenewal: { days: 30, statute: "Wyo. Stat. §1-21-1003" },
      noticeToVacate: { days: 30, statute: "Wyo. Stat. §1-21-1003" }
    }
  },
  {
    name: "District of Columbia",
    code: "DC",
    notices: {
      payOrQuit: { days: 30, statute: "DC Code §42-3505.01" },
      unconditionalQuit: { days: 30, statute: "DC Code §42-3505.01" },
      nonRenewal: { days: 90, statute: "DC Code §42-3505.54" },
      noticeToVacate: { days: 90, statute: "DC Code §42-3505.54" }
    }
  }
];
function getState(code) {
  return stateData.find((s) => s.code === code);
}

export { getState as g, stateData as s };
