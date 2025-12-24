import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-12">
      <h1 className="text-5xl font-bold tracking-tight">
        Rabuste
      </h1>

      <p className="mt-4 text-xl text-zinc-300 max-w-xl">
        Bold Robusta coffee. Fine art. AI-powered café experiences.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-12 max-w-2xl">
        <Link
          href="/coffee"
          className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition cursor-pointer"
          >
          ☕ Discover Coffee
        </Link>

        <div className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition cursor-pointer">
          🎨 Explore Art
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition cursor-pointer">
          🎓 Join Workshops
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition cursor-pointer">
          🏪 Franchise With Us
        </div>
      </div>
    </div>
  );
}
