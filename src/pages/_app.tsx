import "antd/dist/antd.css";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="pageInit"
      animate="pageAnimate"
      variants={{
        pageInit: { opacity: 0 },
        pageAnimate: { opacity: 1 },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
