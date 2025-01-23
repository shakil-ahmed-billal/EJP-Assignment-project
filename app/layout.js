import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { AuthProvider } from "@/provider/AuthProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Blogging Site",
  description: "Welcome to my blog where I share insights, stories, and tips.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Header></Header>
          <main className="w-11/12 mx-auto min-h-[calc(100vh-165px)]">
            {children}
          </main>
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
