"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in both email and message.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xl">
      <div>
        <label htmlFor="contact-email" className="block text-sm font-mono uppercase text-foreground/70 mb-2">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={status === "loading"}
          placeholder="you@example.com"
          className={cn(
            "w-full rounded border border-border bg-background/60 px-4 py-3 font-mono text-foreground",
            "placeholder:text-foreground/40 outline-none transition-colors",
            "focus:border-primary/60 focus:ring-2 focus:ring-primary/20",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-mono uppercase text-foreground/70 mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          disabled={status === "loading"}
          placeholder="How can we help?"
          className={cn(
            "w-full rounded border border-border bg-background/60 px-4 py-3 font-mono text-foreground resize-y min-h-[120px]",
            "placeholder:text-foreground/40 outline-none transition-colors",
            "focus:border-primary/60 focus:ring-2 focus:ring-primary/20",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}

      {status === "success" && (
        <p className="text-sm text-green-400" role="status">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        size="sm"
        className="self-start"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
