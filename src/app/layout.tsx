import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { GeistSans, GeistMono } from 'geist/font'

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
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
