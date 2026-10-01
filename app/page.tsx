import Link from "next/link";


export default function LandingPage() {
  return (
    <main
      className="font-outfit min-h-screen bg-[#E9F0F4] text-[#0B1E3F]"
    >
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 sm:px-10 py-6 max-w-6xl mx-auto">
        <span
          className="text-xl font-semibold tracking-tight text-[#10367D]"
          // style={{ fontFamily: "var(--font-display)" }}
        >
          Flexcard
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-sm text-[#55647D] hover:text-[#10367D] transition"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-semibold bg-[#10367D] text-white px-5 py-2.5 rounded-full hover:bg-[#0B2A63] transition"
          >
            Get your card
          </Link>
        </div>
      </nav>

      {/* Hero — asymmetric split, not centered */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 pt-12 sm:pt-20 pb-24 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <p className="text-sm font-semibold text-[#E3A73B] mb-5">
            For everyone who wants to flex
          </p>
          <h1
            className="text-[2.75rem] sm:text-[3.4rem] leading-[1.05] font-medium mb-6 font-outfit"
            // style={{ fontFamily: "var(--font-display)" }}
          >
            Your identity,
            <br />
            made shareable.
          </h1>
          <p className="text-[#55647D] text-lg leading-relaxed mb-9 max-w-md">
            One card that says who you are, posted to your story, sent in a
            DM, tapped at an event. Behind it, a verified profile with
            everything else: your store, your CV, your work.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/signup"
              className="bg-[#10367D] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#0B2A63] transition"
            >
              Make your card
            </Link>
            <a
              href="#how-it-works"
              className="text-[#10367D] font-medium underline decoration-[#10367D]/30 underline-offset-4 hover:decoration-[#10367D] transition"
            >
              How it works
            </a>
          </div>
        </div>

        {/* Real rendered card, not a placeholder */}
        <div className="flex justify-center md:justify-end">
          <div
            className="w-72 rounded-[28px] bg-[#10367D] p-6 shadow-[0_30px_60px_-15px_rgba(16,54,125,0.45)]"
            style={{ transform: "rotate(3deg)" }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E3A73B] to-[#F4C877] mb-4" />
            <p
              className="text-white text-lg font-medium mb-0.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Samuel Aderogba
            </p>
            <p className="text-white/60 text-sm mb-4">@devrogba</p>
            <div className="flex gap-2 mb-5">
              <span className="text-[11px] text-white/80 bg-white/10 px-2.5 py-1 rounded-full">
                Coding
              </span>
              <span className="text-[11px] text-white/80 bg-white/10 px-2.5 py-1 rounded-full">
                Gaming
              </span>
            </div>
            <div className="border border-dashed border-white/25 rounded-xl px-3.5 py-2.5 text-white/90 text-[13px] font-medium">
              vibe.cv/devrogba →
            </div>
          </div>
        </div>
      </section>

      {/* How it works — content-shaped, not identical cards */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 sm:px-10 py-20">
        <h2
          className="text-3xl font-medium mb-14 max-w-md font-lato"
          // style={{ fontFamily: "var(--font-display)" }}
        >
          Two things, one flow.
        </h2>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* The card — visually IS a card */}
          <div className="bg-[#10367D] rounded-3xl p-7 text-white">
            <p
              className="text-lg font-medium mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The card
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              An image, built to be shared. No login to view it — just your
              name, your vibe, and a link out. Made for WhatsApp status and
              IG stories.
            </p>
          </div>

          <div
            className="hidden md:block text-3xl text-[#55647D]"
            aria-hidden="true"
          >
            →
          </div>

          {/* The profile — visually IS a link list */}
          <div className="bg-white rounded-3xl p-7 border border-[#10367D]/10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F8A55] bg-[#1F8A55]/10 px-2.5 py-1 rounded-full mb-3">
              ✓ Verified
            </div>
            <p
              className="text-lg font-medium mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The profile
            </p>
            <p className="text-[#55647D] text-sm leading-relaxed">
              Where the card leads. Your store, CV, portfolio, and socials —
              behind a badge that means you're a real, verified student.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <div className="bg-[#10367D] rounded-[32px] px-10 py-16 text-center">
          <h2
            className="text-3xl sm:text-4xl text-white font-medium mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Two minutes. One card.
          </h2>
          <p className="text-white/60 mb-8 max-w-sm mx-auto">
            Verify with your school email, build your card, and share it
            today.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-[#E3A73B] text-black font-semibold px-8 py-3.5 rounded-full hover:bg-[#EFC066] transition"
          >
            Create your card
          </Link>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 sm:px-10 py-10 text-sm text-[#55647D]">
        VibeCard — built for UNILAG, starting here.
      </footer>
    </main>
  );
}