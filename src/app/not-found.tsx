import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-950 text-stone-50">
      <h2 className="mb-4 text-4xl font-serif text-amber-500">404 - Pagina Non Trovata</h2>
      <p className="mb-8 text-xl text-stone-300">Sembra che tu ti sia perso nel forno...</p>
      <Link 
        href="/"
        className="rounded-full bg-amber-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-amber-700"
      >
        Torna alla Home
      </Link>
    </div>
  )
}
