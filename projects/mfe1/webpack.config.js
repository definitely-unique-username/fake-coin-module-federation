const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['wallet-lib']);

module.exports = {
  output: {
    uniqueName: "mfe1",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },
        name: "mfe1",
        filename: "remoteEntry.js",
        exposes: {
            './cryptos': './projects/mfe1/src/app/cryptos/cryptos.module.ts',
        },        
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/material/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/material/button": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/material/card": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/material/icon": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/material/input": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/material/form-field": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
