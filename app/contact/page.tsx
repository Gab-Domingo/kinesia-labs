export default function ContactPage() {
  return (
    <main className="container py-28 md:py-40">
      <h1 className="text-4xl md:text-5xl font-sentient">Get in Touch</h1>
      <form className="mt-10 grid gap-4 max-w-xl" aria-label="Contact form">
        <label className="text-sm" htmlFor="name">Name</label>
        <input id="name" className="border rounded-md bg-transparent px-4 h-12" placeholder="Your name" autoComplete="name" />
        <label className="text-sm" htmlFor="email">Email</label>
        <input id="email" className="border rounded-md bg-transparent px-4 h-12" placeholder="you@example.com" type="email" autoComplete="email" />
        <label className="text-sm" htmlFor="message">Message</label>
        <textarea id="message" className="border rounded-md bg-transparent px-4 py-3 h-32" placeholder="How can we collaborate?" />
        <button className="border px-6 h-12 uppercase font-mono">Submit</button>
      </form>
      <div className="mt-10 text-foreground/70">
        <p>Connect: <a className="text-primary hover:underline" href="#">LinkedIn</a> · <a className="text-primary hover:underline" href="#">GitHub</a> · <a className="text-primary hover:underline" href="#">X/Twitter</a></p>
        <p className="mt-4 text-sm">© Kinesia Labs — All rights reserved.</p>
      </div>
    </main>
  );
}


