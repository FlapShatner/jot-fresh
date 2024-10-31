import Header from '@/components/header/header'
import { validateRequest } from '@/actions/auth-actions'
import type { Metadata } from 'next'
import { cn } from '@/lib/cn'
import { Inter, Caveat, DM_Sans } from 'next/font/google'

import './globals.css'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

export const metadata: Metadata = {
 title: 'Jot',
 description: "G'head and jot that down",
}

export const dmSans = DM_Sans({ subsets: ['latin'], display: 'swap', variable: '--dm-sans' })
export const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--inter' })
export const caveat = Caveat({ subsets: ['latin'], display: 'swap', variable: '--caveat' })

export default async function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 const { user, session } = await validateRequest()
 return (
  <html lang='en'>
   <body className={cn(inter.variable, caveat.variable, dmSans.variable, 'font-dmSans overflow-hidden')}>
    <SidebarProvider defaultOpen={false}>
     <AppSidebar />
     <div>
      <Header user={user ? user : null} />
      {children}
     </div>
    </SidebarProvider>
   </body>
  </html>
 )
}
