import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SmartCycle</h1>
        <nav className="flex gap-6">
          <Link href="/" className="border-b-2 border-b-transparent hover:border-b-white p-1 duration-200">
            Home
          </Link>
          <Link href="/team" className="border-b-2 border-b-transparent hover:border-b-white p-1 duration-200">
            Meet the Team
          </Link>
        </nav>
      </div>
    </header>
  );
}
