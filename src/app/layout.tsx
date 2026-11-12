import type { Metadata } from "next";
import GlobalLeadPopup from "@/components/GlobalLeadPopup";
import { Roboto, Poppins } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Script from "next/script";
import Whatsapp from "@/components/WhatsApp";
import Salesiq from "@/components/zohochatbot/Salesiq";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

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
  // Paid-ads landing page: kept live for campaigns, kept out of Google. Its title targets "hotel marketing
  // agency in India", the same search fielmente.com's home page ranks for, so with both indexed Google kept
  // swapping them and fielmente.com's visibility swung. Google Ads ignores noindex, so ads keep running.
  // Titles and copy are unchanged on purpose.
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
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
        <Salesiq />
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
      <body className={`${roboto.className} ${poppins.className} antialiased`} suppressHydrationWarning={true}>
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
        <Whatsapp />
        <GlobalLeadPopup />
      </body>
    </html>
  );
}
