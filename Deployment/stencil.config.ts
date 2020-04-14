import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'UdemyWCCourse',
  outputTargets:[
    {
      type: 'dist'
    },
    // {
    //   type: 'www',
    //   serviceWorker: null
    // }
  ]
};
