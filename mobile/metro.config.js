const { getDefaultConfig } = require('metro-config');
module.exports = (async () => {
  const cfg = await getDefaultConfig();
  cfg.resolver.assetExts.push('db');
  return cfg;
})();
