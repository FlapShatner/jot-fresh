import { Header } from '@/components'
import { validateRequest } from '@/actions/auth-actions'
import type { Metadata } from 'next'
import { cn } from '@/lib/cn'
import { inter, caveat, dmSans, sono } from '@/fonts'
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
   <body className={cn(inter.variable, caveat.variable, dmSans.variable, sono.variable, dmSans.className, 'font-dmSans overflow-hidden')}>
    <Header user={user ? user : null} />
    {children}
   </body>
  </html>
 )
}
