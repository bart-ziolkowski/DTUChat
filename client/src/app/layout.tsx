import "./assets/styles/index.css";
import "font-awesome/css/font-awesome.min.css";

import { AuthContextProvider } from "../context/AuthContext";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Layout from "./components/layout";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DTU Chat",
  description: "Chat with your fellow DTU students",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
      <html lang="en">
        <body className={roboto.className} suppressHydrationWarning={true}>
        <Layout children={children}/>
        </body>
      </html>
    </AuthContextProvider>
  );
}
