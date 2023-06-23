'use client'
import Button from '@/ui/button'
import { useRouter } from 'next/navigation'
import { useCallback, useRef } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'

export default function HeaderBlogPage() {
  const refAnimationInstance = useRef<any>(null)
  const router = useRouter()

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance
  }, [])

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        particleCount: Math.floor(500 * particleRatio)
      })
  }, [])

  const fire = useCallback(() => {
    makeShot(0.55, {
      spread: 120,
      startVelocity: 25,
      decay: 0.9,
      scalar: 1
    })
  }, [makeShot])

  return (
    <header className=' mb-8 flex items-center justify-between'>
      <Button
        className='flex items-center justify-center px-4 text-sm font-light'
        onClick={() => router.back()}
      >
        <IoIosArrowBack size={20} />
        Atras
      </Button>

      <div className='relative flex items-center justify-end gap-4 border-customGray pb-2 md:w-fit md:border-b-2 '>
        <ReactCanvasConfetti
          refConfetti={getInstance}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0
          }}
        />
        <span className='hidden text-sm font-extralight opacity-60 md:block'>
          Tiempo 5 min
        </span>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href)
            fire()
          }}
          className=' flex items-center justify-center gap-1 text-sm font-light'
        >
          <AiOutlineShareAlt size={20} /> Share
        </Button>
      </div>
    </header>
  )
}
