import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Petito Shop',
    template: "Petito Shop | %s"
  },
  description: 'Nơi chủ shop Petito order hàng Nhật nghĩ tác phẩm tốt nghiệp.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='background'>
        <Navbar />
        {children}
        <Footer />
        </div>
        </body>
    </html>
  )
}