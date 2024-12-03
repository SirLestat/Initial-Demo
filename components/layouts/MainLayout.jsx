import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={`${styles.page}`}>
        <main className={styles.main}>
          {children}
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h2>Route: {asPath}</h2>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
