"use client"
import "../styles/globals.css";
// import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Footer from "@/components/base/footer";
import { useEffect } from "react";

const sora = Sora({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "E3.Ventures | Saudi Venture Builder | Startup Studio in KSA",
//   description:
//     "E3 Ventures: Your trusted partner leads the way in Saudi Arabia. Our venture studio supports startups with funding and mentorship. Together, let's build a thriving startup ecosystem!",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = `${window.location.origin}${window.location.pathname}`; // Dynamic URL with pathname
    document.head.appendChild(canonicalLink);

    return () => {
      // Cleanup if necessary
      document.head.removeChild(canonicalLink);
    };
  }, []);



  return (
    <html lang="en">
      <head>
      <title>
          Startup Acceleration Program in Saudi Market | Accelerators in KSA |
          E3.Ventures
        </title>
        <meta
          name="description"
          content="Expand your startup in Saudi market with our 3-month acceleration program. E3 Ventures supports MENA entrepreneurs with essential resources. Apply to join our ecosystem now!"
        />
        <meta name="robots" content="index,follow"/>
      </head>
      <body className={`relative ${sora.className} bg-darkBlue`}>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
