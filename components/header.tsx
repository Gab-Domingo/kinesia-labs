import Link from "next/link";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 w-full bg-background/95 backdrop-blur-sm border-b border-border/50 pt-8 md:pt-14 pb-4 md:pb-5">
      <header className="flex items-center justify-between container">
        <Link href="/">
          <Logo className="w-[100px] md:w-[120px]" />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {[
            { name: "About", href: "/about" },
            { name: "Industries", href: "/industries" },
            { name: "Research", href: "/research" },
            { name: "FAQs", href: "/faqs" },
            { name: "Contact", href: "/contact" },
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
        <MobileMenu />
      </header>
    </div>
  );
};
