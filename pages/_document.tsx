import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.gooleapis.com/css2?family=Kaushan+Script&display=swap"
        rel="stylesheet"/>
      </Head>
      <body className="bg-gradient-to-r from-green-400 to-blue-400" >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
