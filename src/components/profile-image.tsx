'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function ProfileImage({ base, img }: any) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Image
      alt='profile'
      // width={8000}
      // height={8000}
      quality={100}
      src={'/images/profile.jpeg'}
      blurDataURL={base}
      {...img}
      placeholder='blur'
      className={`
               h-64 duration-700 ease-in-out group-hover:opacity-75 md:h-full md:rounded-lg
              ${isLoading ? 'opacity-20 blur-lg grayscale ' : 'blur-0'})`}
      onLoadingComplete={() => setLoading(false)}
      sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
      style={{
        width: '100%',
        objectFit: 'cover'
      }}
    />
  )
}
