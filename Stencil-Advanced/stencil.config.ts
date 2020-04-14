import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'UdemyCourse',
  outputTargets:[
    {
      type: 'dist'
    },
    // {
    //   type: 'www',
    //   serviceWorker: null
    // }
  ],
  globalStyle: 'src/global/variables.css',
  // bundles: [
  //   { components: ['']}
  // ] //code splitting
};
