import '@fortawesome/fontawesome-free/css/all.min.css';
import ClientLayout from './ClientLayout';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      {/* <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7JJDS82DTX"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7JJDS82DTX');
            `,
          }}
        />
        <link rel="alternate" href="https://duhocqueen.com" hrefLang="vi" />
        <link rel="alternate" href="https://duhocqueen.com/vi" hrefLang="x-default" />
        <link rel="alternate" href="https://duhocqueen.com/en" hrefLang="en" />
        <link rel="alternate" href="https://duhocqueen.com/ko" hrefLang="ko" />
        <meta
          name="google-site-verification"
          content="ZxMDlnjSeUq9ixQavvb1A6f4tXbY92eKVzu_XnyZHy0"
        />
      </head> */}
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
