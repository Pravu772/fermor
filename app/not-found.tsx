import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { LogoWordmark } from "@/components/ui/LogoWordmark";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#111A15] flex flex-col justify-between p-6 md:p-12 font-sans">
      <header className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="group">
          <LogoWordmark />
        </Link>
      </header>

      <section className="max-w-xl mx-auto w-full text-center py-20">
        <div className="w-12 h-12 rounded-xl bg-[#F3EFE6] border border-[#E4E0D6] flex items-center justify-center mx-auto mb-6 text-[#0E2F22]">
          <Compass className="w-6 h-6" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-[#8F4A00] bg-[#FAF9F5] px-3 py-1 rounded-full border border-[#E4E0D6]">
          404 — Page Not Found
        </span>

        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#0E2F22] mt-4 mb-4">
          This calculation path does not exist.
        </h1>

        <p className="text-[#4A5750] text-base md:text-lg mb-8 leading-relaxed">
          The page you requested may have moved or is not yet published. All our live financial tools and explainers are available from the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0E2F22] text-[#FAF9F5] text-sm font-semibold hover:bg-[#164332] transition-colors w-full sm:w-auto shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Homepage
          </Link>
          <Link
            href="/#calculators"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-[#E4E0D6] text-[#111A15] text-sm font-semibold hover:bg-[#F3EFE6] transition-colors w-full sm:w-auto"
          >
            Explore Calculators
          </Link>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto w-full text-center text-xs text-[#4A5750] border-t border-[#E4E0D6] pt-6">
        Fermor Technologies Pvt. Ltd., registered in India • Calculations run in your browser
      </footer>
    </main>
  );
}
