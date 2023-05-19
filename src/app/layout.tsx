import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

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
        <div className="h-screen bg-slate-500 flex flex-col items-center ">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
