import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Header } from '@/components/templates/Header/Header'
import { Footer } from '@/components/templates/Footer/Footer'

import './globals.scss'

const montserrat = Montserrat({ weight: ['400', '500', '700'], subsets: ['cyrillic'], style: 'normal' });

export const metadata: Metadata = {
  title: 'Аренда автомобиля в витебске',
  description: 'Аренда грузового автомобиля категории "B" в Витебске. У нас доступные цены и простые условия аренды. Для бронирования звоните по телефону: +375298393593',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
