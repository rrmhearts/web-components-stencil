import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'udemycourse',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  globalStyle: 'src/global/variables.css',
  // bundles: [
  //   { components: ['']}
  // ] //code splitting
};
