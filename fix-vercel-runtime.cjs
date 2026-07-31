const fs = require('fs');

function patchRuntime(dir) {
  const vcConfig = dir + '/.vc-config.json';
  if (fs.existsSync(vcConfig)) {
    const config = JSON.parse(fs.readFileSync(vcConfig, 'utf8'));
    if (config.runtime && config.runtime.includes('18')) {
      config.runtime = 'nodejs20.x';
      fs.writeFileSync(vcConfig, JSON.stringify(config, null, 2));
      console.log('Patched:', vcConfig);
    }
  }
  // recurse into subdirs
  try {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) patchRuntime(dir + '/' + entry.name);
    }
  } catch {}
}

patchRuntime('.vercel/output/functions');
console.log('Runtime patch complete');
