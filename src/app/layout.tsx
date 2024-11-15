import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import Call from "./components/Call";
import Whatsapp from "./components/WhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fielmente : Hotel Marketing Agency in India",
  description:
    "Best marketing agency in India for hotels, resorts and restaurant",
  keywords:
    "hotel marketing agency, hotel marketing agency in India, Ota hotel marketing agency,",
  authors: [{ name: "Fielmente", url: "https://ota.fielmente.com/" }],
  alternates: {
    canonical: "https://ota.fielmente.com/",
  },
  openGraph: {
    title: "Fielmente : Hotel Marketing Agency in India",
    description:
      "Best marketing agency in India for hotels, resorts and restaurant",
    url: "https://ota.fielmente.com/",
    images: [
      {
        url: "https://ota.fielmente.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fielmente : Hotel Marketing Agency in",
      },
    ],
    type: "website",
    locale: "en-US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="vKQyk75wG0kfB4x60GCRAmVeErtPS9rgcM9-YNRAvLw"
        />
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "n572fc8txn");
              `}
        </Script>

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PVZG7NGGMG"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-PVZG7NGGMG');`,
          }}
        ></Script>

        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQ5LPRNM');
              `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQ5LPRNM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {/* <Header /> */}
        <Navbar />
        {children}
        <Footer />
        <Call />
        <Whatsapp />
      </body>
    </html>
  );
}
