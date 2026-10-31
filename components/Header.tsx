import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-800">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold text-slate-100">
          Jose Leonett
        </Link>
        <div className="flex gap-6 text-sm text-slate-400">
          <Link className="transition hover:text-emerald-300" href="/">
            Home
          </Link>
          <Link className="transition hover:text-emerald-300" href="/about">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
