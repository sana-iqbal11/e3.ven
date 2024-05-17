import "../styles/globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Footer from "@/components/base/footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E3.Ventures | Saudi Venture Builder | Startup Studio in KSA",
  description:
    "E3 Ventures: Your trusted partner leads the way in Saudi Arabia. Our venture studio supports startups with funding and mentorship. Together, let's build a thriving startup ecosystem!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://deploy-preview-1--wwwe3ventures.netlify.app/"
        />
      </head>
      <body className={`relative ${sora.className} bg-darkBlue`}>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
