import Head from "next/head";
import { Inter } from "next/font/google";

export const siteTitle = "Login Signup";

export default function Layout({ pageTitle, children }) {
  const title = "Login Signup Nextjs";
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="VulcanWM's GuestBook" />
        <meta property="og:image" content="/logo.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="Website" />
        <title>{pageTitle}</title>
      </Head>
      <main
        className={`flex absolute min-h-screen flex-col items-center justify-between p-24`}
      >
        {children}
      </main>
    </div>
  );
}