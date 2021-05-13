import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app';
import { PageHeader } from 'antd';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <PageHeader
        title="Daytechstagram"
        subTitle="Share your happiness"
      />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
