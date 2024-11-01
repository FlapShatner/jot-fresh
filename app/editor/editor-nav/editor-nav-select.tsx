'use client'
import React, { useLayoutEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import jotConfig from '@/jot.config'

export default function EditorNavSelect({ nav, mobileNav }: { nav: React.ReactNode; mobileNav: React.ReactNode }) {
 const [isMobile, setIsMobile] = useState(false)

 const { width } = useWindowSize()
 useLayoutEffect(() => {
  if (width < 800) {
   setIsMobile(true)
  } else {
   setIsMobile(false)
  }
 }, [width])

 return <>{isMobile ? mobileNav : nav}</>
}
