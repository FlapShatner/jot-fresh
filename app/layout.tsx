import { Header } from '@/components'
import { validateRequest } from '@/actions/auth-actions'
import type { Metadata } from 'next'
import { cn } from '@/lib'
import { inter, caveat, dmSans, sono } from '@/fonts'
import 'react-tooltip/dist/react-tooltip.css'
import './globals.css'

export const metadata: Metadata = {
 title: 'Jot',
 description: "G'head and jot that down",
}

export default async function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 const { user, session } = await validateRequest()
 return (
  <html lang='en'>
   <body className={cn(inter.variable, caveat.variable, dmSans.variable, sono.variable, 'font-dmSans overflow-hidden')}>
    <Header user={user ? user : null} />
    {children}
   </body>
  </html>
 )
}
