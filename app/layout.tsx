import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Header } from '@/components/templates/Header/Header'
import { Footer } from '@/components/templates/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Аренда автомобиля в витебске',
  description: 'Аренда грузового автомобиля в витебске',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
