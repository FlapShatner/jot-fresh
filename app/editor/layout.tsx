import React from 'react'
import { validateRequest } from '@/actions/auth-actions'
import { redirect } from 'next/navigation'
import EditorNavSelect from './editor-nav/editor-nav-select'
import EditorNav from './editor-nav'
import EditorNavMobile from './editor-nav/editor-nav-mobile'
import { JotaiProvider } from "@/components/providers/jotai-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export default async function EditorLayout({
  children,
  params: paramsPromise,
}: {
  children: React.ReactNode;
  params: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await paramsPromise;
  const { user, session } = await validateRequest();


  if (!user) {
    return redirect("/login");
  }
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem>
      <JotaiProvider>
        <div className='w-full h-full flex gap-2 p-2 pt-0'>
          <EditorNavSelect
            nav={<EditorNav params={params} />}
            mobileNav={
              <EditorNavMobile>
                <EditorNav params={params} />
              </EditorNavMobile>
            }
          />
          {children}
        </div>
        <Toaster />
      </JotaiProvider>
    </ThemeProvider>
  );
}
