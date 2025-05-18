import './globals.css'

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  )
}
export const metadata = {
  title: "Nefrit Mahardika",
  description: "A tech enthusiast who loves making sense of data and making graphic designs that make sense. I mix logic with creativity to solve problems and build meaningful things.",
  icons: {
    icon: '/public/img/Photo.png'
},
}



import Head from 'next/head';

<Head>
  <link href="https://cdn.remixicon.com/releases/v1.3.1/remixicon.css" rel="stylesheet" />
</Head>
