import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <Image src="/icons/loading-circle.svg" width={50} height={50} alt="loading..." />
    </div>
  )
}

export default Loader