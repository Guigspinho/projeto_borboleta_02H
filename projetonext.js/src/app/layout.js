import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Biblioteca Rick Riordan",
  description: "Site da biblioteca Rick Riordan, com informações sobre eventos, programação, acervo e contato.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body><Menu />{children}<Footer /></body>
    </html>
  );
}
