import {Vazirmatn} from 'next/font/google'
import "./globals.css"; 
import 'react-loading-skeleton/dist/skeleton.css'

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
    <html dir='rtl' lang="fa-IR" className={vazir.className}>
      <body>{children}</body>
    </html>
  );
}
