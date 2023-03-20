import Link from 'next/link'

export default function Resources() {
  return (
    <div className='grid place-content-center gap-2 px-6 md:p-0  '>
      ⚠️ Página en desarrollo ⚠️
      <Link
        className='rounded-lg border-4 border-lightGray px-4 py-2 text-center hover:bg-lightBrown'
        href='/'
      >
        Volver a inicio
      </Link>
    </div>
  )
}
