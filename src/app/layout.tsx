import "./globals.css";
import { Inter } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
