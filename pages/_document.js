import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2EZ9N9CXHZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2EZ9N9CXHZ');
            `,
          }}
        />
        {/* Favicon */}
        <link rel="icon" href="/Platinum thumbnail.png" type="image/png" />
        <link rel="shortcut icon" href="/Platinum thumbnail.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Platinum thumbnail.png" />
        {/* Default OG image */}
        <meta property="og:image" content="/Platinum thumbnail.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
