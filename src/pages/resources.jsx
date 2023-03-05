import Link from 'next/link'

export default function Resources() {
  return (
    <div className="grid place-content-center gap-2 px-6 md:p-0  ">
      ⚠️ Página en desarrollo ⚠️
      <Link
        className="rounded-lg text-center px-4 py-2 border-4 hover:bg-brownLight border-[#2525297c]"
        href="/">
        Volver a inicio
      </Link>
    </div>
  )
}
