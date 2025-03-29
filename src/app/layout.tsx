import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import { Geist, Geist_Mono } from "next/font/google"
import { Provider } from "@/lib/Context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roger Web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f7f7f7] flex justify-center gap-12 p-8`}
      >
        <Provider>
          <div className="fixed top-8 sm:left-8 w-full px-6 sm:px-0 h-[1000px]">
            <Sidebar />
          </div>
          {children}
        </Provider>

      </body>
    </html>
  );
}
