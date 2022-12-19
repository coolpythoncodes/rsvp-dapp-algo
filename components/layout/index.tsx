import React from 'react'
import Navbar from './navbar'

type LayoutProp = {
    children: React.ReactNode
}

const Layout = ({children}:LayoutProp) => {
  return (
    <div>
        <Navbar />
        <main className='bg-[#202845] h-screen mt-20'>{children}</main>
    </div>
  )
}

export default Layout