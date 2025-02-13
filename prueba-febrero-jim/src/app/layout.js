import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // ✅ CORRECTO: array de strings
  variable: "--font-roboto",
});


export default function RootLayout({ children }) {
  return (
    <html lang="es" className={roboto.variable}>
      <body className="font-roboto">{children}</body>
    </html>
  );
}
