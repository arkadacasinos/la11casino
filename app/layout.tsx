import { Analytics } from '@vercel/analytics/next'
import { Inter, Space_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter', display: 'swap' })
const spaceMono = Space_Mono({ subsets: ['latin', 'cyrillic'], weight: ['400', '700'], variable: '--font-space-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'La Casino — играть онлайн на официальном сайте и через зеркало',
  description: 'La Casino: удобный вход, понятные игры, зеркало и официальный сайт для игроков. Узнайте, как играть онлайн, быстро открыть аккаунт и начать с ответственной игрой.',
  metadataBase: new URL('https://la11casino.vercel.app/'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.png', apple: '/icon.png' },
  openGraph: { title: 'La Casino — понятный вход в игру онлайн', description: 'Короткий гид по входу, зеркалу, официальному сайту и ответственному подходу к игре.', url: 'https://la11casino.vercel.app/', siteName: 'La Casino', locale: 'ru_RU', type: 'website' },
}

export const viewport: Viewport = { themeColor: '#0c1524', colorScheme: 'dark', width: 'device-width', initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="author" content="La Casino" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://la11casino.vercel.app/" />
      </head>
      <body className={`${inter.variable} ${spaceMono.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
