import {Vazirmatn} from 'next/font/google'
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap'
})

export const metadata = {
  title: "اپلیکیشن آزمون",
};


export default function RootLayout({
  children,
}) {
  return (
    <html dir='rtl' lang="fa-IR">
      <body className={vazir.className}>{children}</body>
    </html>
  );
}
