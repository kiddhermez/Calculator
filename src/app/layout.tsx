import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

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
      <body className={rubik.className}>
        <div className="flex h-screen flex-col items-center bg-[#BDE0FE] dark:bg-[#191D32] ">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
