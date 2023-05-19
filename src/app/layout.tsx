import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import PanelInfo from "@/Components/PanelInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calculadora",
  description: "Calculadora de Campo Electrico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex h-screen flex-col items-center bg-slate-500 ">
          <Navbar />
          <PanelInfo />
          {children}
        </div>
      </body>
    </html>
  );
}