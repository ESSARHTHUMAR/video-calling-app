import StreamVideoProvider from '@/Providers/StreamClientProviders'
import React, { Children, ReactNode } from 'react'

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
        <StreamVideoProvider>
        {children}
        </StreamVideoProvider>
        
    </main>
  )
}

export default RootLayout