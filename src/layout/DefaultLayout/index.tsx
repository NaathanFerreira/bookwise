import { ReactNode } from 'react'
import { DefaultLayoutContainer, MainContent } from './styles'
import SidebarNav from '@/components/SidebarNav'

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <DefaultLayoutContainer>
      <SidebarNav />
      <MainContent>{children}</MainContent>
    </DefaultLayoutContainer>
  )
}
