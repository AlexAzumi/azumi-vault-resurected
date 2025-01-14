import React, { FC } from 'react';
import Head from 'next/head';

import MainLayout from './MainLayout/MainLayout';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './_app.scss';

/**
 * Main app component
 */
const App: FC = () => {
  return (
    <>
      {/* Head tag */}
      <Head>
        <title>Alejandro Suárez | Portafolio personal</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* Manifest */}
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <MainLayout />
    </>
  );
};

export default App;
