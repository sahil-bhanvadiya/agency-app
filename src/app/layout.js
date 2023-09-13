import { Inter } from 'next/font/google'
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agency App',
  description: 'A company that provides a specialized service to their clients.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
