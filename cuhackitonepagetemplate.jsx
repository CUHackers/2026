import React, { useEffect, useState } from "react";

// Barebones one-page template for CUHackIT using React
// - Single file (drop in as App.jsx / App.tsx)
// - Tailwind CSS utility classes for quick styling (optional)
// - Smooth-scroll nav to sections: Home, FAQ, Register, Sponsor, About, Schedule
// - Mobile-friendly nav
//
// If you're not using Tailwind yet, you can keep the structure and replace className values later.

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Enable smooth scrolling for anchor-style navigation
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "faq", label: "FAQ" },
    { id: "register", label: "Register" },
    { id: "sponsor", label: "Sponsor" },
    { id: "about", label: "About" },
    { id: "schedule", label: "Schedule" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-xl bg-neutral-900" />
            <span className="font-bold tracking-tight">CUHackIT</span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3 py-2 rounded-xl hover:bg-neutral-100 active:scale-[.98] transition"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-xl hover:bg-neutral-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-neutral-200">
            <div className="max-w-6xl mx-auto px-2 py-2 grid">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left px-3 py-2 rounded-lg hover:bg-neutral-100"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero / Home */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              CUHackIT 2025
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Build, learn, and ship in 24 hours. Open to all skill levels.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => scrollTo("register")}
                className="px-5 py-3 rounded-2xl bg-neutral-900 text-white hover:opacity-90 active:scale-[.98]"
              >
                Register
              </button>
              <button
                onClick={() => scrollTo("faq")}
                className="px-5 py-3 rounded-2xl border border-neutral-300 hover:bg-neutral-100 active:scale-[.98]"
              >
                Read the FAQ
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 p-6">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 grid place-items-center">
              <span className="text-neutral-500">Hero image / graphic</span>
            </div>
            <div className="mt-4 text-sm text-neutral-500">
              January 25–26, 2025 • Clemson, SC
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">About</h2>
          <p className="mt-4 text-neutral-600">
            CUHackIT is a student-run hackathon focused on creativity, learning,
            and community. Whether it’s your first project or your fiftieth,
            you’ll have mentors, workshops, and peers to help you go from idea to demo.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Schedule</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Day 1 (Sat)</h3>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li><span className="font-medium">10:00</span> • Check-in & Breakfast</li>
              <li><span className="font-medium">11:00</span> • Opening Ceremony</li>
              <li><span className="font-medium">12:00</span> • Hacking Starts</li>
              <li><span className="font-medium">18:00</span> • Dinner</li>
              <li><span className="font-medium">21:00</span> • Fun Activity</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Day 2 (Sun)</h3>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li><span className="font-medium">08:00</span> • Breakfast</li>
              <li><span className="font-medium">12:00</span> • Hacking Ends</li>
              <li><span className="font-medium">12:30</span> • Expo</li>
              <li><span className="font-medium">15:00</span> • Closing & Awards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Register */}
      <section id="register" className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Register</h2>
          <p className="mt-4 text-neutral-600">
            Applications open soon. Join the waitlist and we’ll email you when registration goes live.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 grid gap-3 max-w-md"
          >
            <input
              type="email"
              required
              placeholder="you@school.edu"
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
            <button className="px-5 py-3 rounded-2xl bg-neutral-900 text-white hover:opacity-90 active:scale-[.98]">
              Join Waitlist
            </button>
            <p className="text-xs text-neutral-500">We’ll never share your email.</p>
          </form>
        </div>
      </section>

      {/* Sponsor */}
      <section id="sponsor" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Sponsor</h2>
        <p className="mt-4 text-neutral-600">
          Support the next generation of builders. Get in touch for prospectus and tiers.
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video rounded-2xl border border-neutral-200 grid place-items-center text-neutral-400"
            >
              Logo
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="inline-block px-5 py-3 rounded-2xl border border-neutral-300 hover:bg-neutral-100"
          >
            Request Sponsor Prospectus
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
          <div className="mt-6 grid gap-4">
            <details className="rounded-2xl border border-neutral-200 p-4">
              <summary className="font-medium cursor-pointer">Who can attend?</summary>
              <p className="mt-2 text-neutral-700">
                Students of all backgrounds and skill levels. Beginners welcome!
              </p>
            </details>
            <details className="rounded-2xl border border-neutral-200 p-4">
              <summary className="font-medium cursor-pointer">What should I bring?</summary>
              <p className="mt-2 text-neutral-700">
                Laptop, charger, and any hardware you plan to hack on.
              </p>
            </details>
            <details className="rounded-2xl border border-neutral-200 p-4">
              <summary className="font-medium cursor-pointer">Is it free?</summary>
              <p className="mt-2 text-neutral-700">
                Yes! Thanks to our sponsors, CUHackIT is free for participants.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-12 text-sm text-neutral-500">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} CUHackIT. All rights reserved.</div>
          <div className="flex gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:underline"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
