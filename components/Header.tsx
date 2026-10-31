import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-bold text-slate-900">
          Jose Leonett
        </Link>
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <Link className="transition hover:text-cyan-700" href="/">
            Home
          </Link>
          <Link className="transition hover:text-cyan-700" href="/about">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
