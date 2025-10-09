const faqs = [
  { q: 'What is EMG?', a: 'Electromyography measures electrical activity produced by muscles.' },
  { q: 'How accurate is control?', a: 'Accuracy depends on signal quality and calibration; we optimize for stable real-time control.' },
  { q: 'Is the armband invasive or non-invasive?', a: 'Our research focuses on invasive EMG for higher fidelity; non-invasive pathways are considered for future accessibility.' },
  { q: 'Who can use the product?', a: 'Initial focus: mobility-impaired users and research collaborators.' },
  { q: 'How does it connect to hardware?', a: 'Decoded intent maps to device-specific control interfaces (e.g., wheelchair controllers, robotics APIs).' },
];

export default function FAQsPage() {
  return (
    <main className="container py-28 md:py-40">
      <h1 className="text-4xl md:text-5xl font-sentient">FAQs</h1>
      <div className="mt-10 divide-y border rounded-xl">
        {faqs.map((item) => (
          <details key={item.q} className="p-6">
            <summary className="cursor-pointer font-mono text-lg">{item.q}</summary>
            <p className="mt-3 text-foreground/70">{item.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}


