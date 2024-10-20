'use client'
import React from 'react'
import { useWindowSize } from 'usehooks-ts'
import jotConfig from '@/jot.config'

export default function EditorNavSelect({ nav, mobileNav }: { nav: React.ReactNode; mobileNav: React.ReactNode }) {
 const { width } = useWindowSize()
 const isMobile = width < 800
 return <>{isMobile ? mobileNav : nav}</>
}
