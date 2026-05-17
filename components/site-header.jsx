import Link from "next/link";
import BrandMark from "./brand-mark";
import { navigation } from "../lib/site-content";

export default function SiteHeader() {
  return (
    <>
      {/* Top announcement bar */}
      <section className="topbar">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-2.5 text-sm sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-white/80 text-xs">
            <span className="flex items-center gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z"
                  fill="currentColor"
                  opacity=".7"
                />
              </svg>
              Kathmandu-32, Koteshwor
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">
              Values-led learning for a changing world
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-white">
            <Link href="/admissions" className="topbar-link">
              ✦ Admissions Open
            </Link>
            <Link href="/contact" className="topbar-link">
              Book A Campus Visit →
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <div className="page-nav-shell">
        <div className="mx-auto max-w-7xl px-6 pt-5 sm:px-8 lg:px-10">
          <header className="site-header">
            <Link href="/" className="inline-flex">
              <BrandMark compact />
            </Link>

            <nav className="flex flex-wrap items-center justify-end gap-1 text-sm font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={item.href === "/contact" ? "nav-cta" : "nav-pill"}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
        </div>
      </div>
    </>
  );
}
