import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className=' py-10 bg-gray-900 h-screen   min-h-screen  h-full'>
        {children}
    </div>
  )
}