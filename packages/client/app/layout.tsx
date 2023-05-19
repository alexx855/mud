import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Opolis',
  description: 'A web3 game where you build and manage your own city-state in a vast permissionless autonomous world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>{children}</>
      </body>
    </html>
  )
}
