import "./globals.css";
import { Playfair_Display, Montserrat } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--playfair-text-font",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--montserrant-display-font",
});

export const metadata = {
  title: "UCR Vietnamese Student Assoication",
  description:
    "A website for the Vietnamese Student Assoication at UC Riverside",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className={`${playfair.className} bg-vsa-green-100/50`}>
        <ReactQueryClientProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
