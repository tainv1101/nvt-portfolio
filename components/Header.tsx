import Link from "next/link";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className="text-4xl font-semibold">Nguyen Van Tai <span className="text-accent">.</span></h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;