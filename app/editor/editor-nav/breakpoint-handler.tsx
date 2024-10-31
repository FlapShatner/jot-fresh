'use client'
import React from 'react'
import { useWindowSize } from 'usehooks-ts'
import jotConfig from '@/jot.config'
import { SidebarTrigger } from '@/components/ui/sidebar'

function BreakpointHandler({ nav }: { nav: React.ReactNode }) {
 const { width } = useWindowSize()
 const isMobile = width <= jotConfig.breakpoints.sm
 return isMobile ? <SidebarTrigger /> : nav
}

export default BreakpointHandler
