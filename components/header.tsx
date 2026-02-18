import Link from "next/link";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 w-full bg-background/95 backdrop-blur-sm border-b border-border/50 py-3 md:py-4">
      <header className="flex items-center justify-between container gap-4">
        <Link href="/" className="shrink-0 flex-1 lg:flex-none" aria-label="Home">
          <Logo className="h-7 md:h-9 w-auto max-w-full" alt="" />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {[
            { name: "About", href: "/about" },
            { name: "Industries", href: "/industries" },
            { name: "Research", href: "/research" },
          ].map((item) => (
            <Link
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80" href="/contact">
          Get in Touch
        </Link>
        <MobileMenu className="shrink-0" />
      </header>
    </div>
  );
};
