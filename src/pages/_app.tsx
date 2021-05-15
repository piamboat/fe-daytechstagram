import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app';
import { PageHeader } from 'antd';
import { motion, MotionConfig } from 'framer-motion';
import React from 'react';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div key={ router.route } initial="pageInit" animate="pageAnimate" variants={{
      pageInit: { opacity: 0 },
      pageAnimate: { opacity: 1 },
    }}>
      <PageHeader
        title="Daytechstagram"
        subTitle="Share your happiness"
      />
      <Component {...pageProps} />
    </motion.div>
  )
}

export default MyApp
