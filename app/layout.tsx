import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Whiskey",
  description: "African Whiskey",
  icons: { icon: "/logo.jpeg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
