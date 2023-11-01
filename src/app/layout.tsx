import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import './globals.css'

export const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700', '600']})
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Eduardo Fontana | Portifólio',
  description: 'FullStack Dev | Granduando em Eng. da Computação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
