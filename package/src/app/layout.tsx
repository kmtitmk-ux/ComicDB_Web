"use client";
import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import Image from "next/image";
import Script from "next/script";
import config from "@/aws-exports.js";

import { Link, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { baselightTheme } from "@/utils/theme/DefaultColors";

import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";

Amplify.configure(config);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mbUp = useMediaQuery("(max-width:1199px)");

  return (
    <html lang="ja">
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-WN44VP7');`,
        }}
      />
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WN44VP7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <ThemeProvider theme={baselightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {mbUp && (
            <div
              style={{
                position: "relative",
                width: "243px",
                height: "50px",
                margin: "15px auto auto",
              }}
            >
              <Logo />
            </div>
          )}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
