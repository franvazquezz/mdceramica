
import "./globals.css";
import { Poppins } from "next/font/google";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001'
// axios.defaults.baseURL = 'https://dogs-backend-vtl5.onrender.com'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: 'MD Cerámica',
  description: 'App de gestión de Alumnas',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={poppins.className}>{children}</body>
    </html>
  );
};