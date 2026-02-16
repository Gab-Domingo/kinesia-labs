"use client";

import Reveal from "@/components/ux/Reveal";

const faqs = [
  {
    q: "What is EMG?",
    a: "Electromyography (EMG) measures the electrical activity produced by skeletal muscles when they contract. When you intend to move—for example, to flex your wrist or close your hand—motor neurons send signals to the muscle fibres, which generate small electrical potentials. Our armband captures these signals via electrodes, amplifies and conditions them, and feeds them into our intent-decoding pipeline. This lets us infer your intended action in real time without physical movement, which is the basis for controlling wheelchairs, robotic arms, and other assistive or industrial hardware.",
  },
  {
    q: "Is the armband invasive or non-invasive?",
    a: "Our armband is non-invasive. We use surface EMG: electrodes sit on the skin and capture muscle activity without needles or implants. This makes the system wearable, easy to set up, and accessible for daily use. We combine high-quality sensors with advanced signal processing and intent-decoding algorithms to achieve clear, selective signals and low-latency control—so you get reliable assistive control from a non-invasive device that fits into real-world, ambulatory settings.",
  },
  {
    q: "How accurate is the control?",
    a: "Control accuracy depends on signal quality, calibration, and the complexity of the intended actions. We use adaptive filtering to maximise signal-to-noise ratio and reduce artefact, and our intent-decoding models are tuned for low-latency, real-time inference. In our lab and pilot settings we target stable, repeatable control for discrete commands (e.g. forward, left, right, stop) and continuous control where applicable, with confidence outputs so the system can indicate when a reading is uncertain. Accuracy is continually improved through better sensors, calibration procedures, and model updates; we optimise for reliable day-to-day use in noisy, ambulatory environments, not only in controlled lab conditions.",
  },
  {
    q: "Who can use the product?",
    a: "Our initial focus is on people with mobility impairments who can benefit from EMG-driven assistive control—for example, wheelchair users who can generate consistent muscle activity in the arm or shoulder. We also work with research and clinical partners to validate the technology and explore new user groups. Use depends on having detectable, interpretable EMG signals from the target muscle groups; we do not assume full motor function. Our non-invasive armband is designed for accessibility and ease of use, so we can bring reliable, safety-critical assistive control to a broad population without implants or clinical procedures.",
  },
  {
    q: "How does it connect to hardware?",
    a: "Decoded intent is mapped to device-specific control interfaces. For wheelchairs, we output commands (e.g. direction and speed) over standard protocols that power chair controllers accept, so integration can work with existing hardware. For robotics, exoskeletons, or industrial equipment, we provide APIs or signal streams that downstream systems consume—whether that is a research rig, a commercial robot, or a custom assistive device. The pipeline runs in real time so that muscle intent is translated into low-latency control signals; we can expose confidence scores and raw or processed signals where needed for safety or custom logic. Our goal is to slot into existing ecosystems rather than require proprietary hardware end to end.",
  },
  {
    q: "What makes Kinesia Labs’ approach different?",
    a: "We use non-invasive (surface) EMG and pair it with adaptive signal processing and real-time AI intent decoding to achieve high-fidelity control without implants. Many solutions use surface EMG or joysticks but struggle with noise and reliability; we prioritise signal quality through advanced filtering and denoising, then build models tuned for assistive control loops. Our work is grounded in research—adaptive filtering, denoising, and latency optimisation—so that the system performs not only in the lab but in real-world, ambulatory settings. We focus on clear, explainable outputs (including confidence) and on integrating with existing assistive and industrial hardware, so that our technology can be adopted within current workflows and safety frameworks.",
  },
];

export function FAQSection() {
  return (
    <section id="faqs" className="container py-16 md:py-24 scroll-mt-28">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-sentient">Frequently Asked Questions</h2>
        <p className="mt-3 font-mono text-foreground/70 max-w-2xl">
          Clear, precise answers about our technology, accuracy, and how it connects to your hardware.
        </p>
      </Reveal>
      <div className="mt-10 divide-y border border-white/10 rounded-xl overflow-hidden">
        {faqs.map((item, idx) => (
          <Reveal key={item.q} delayMs={idx * 40}>
            <details className="p-6 md:p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <summary className="cursor-pointer font-sentient text-lg md:text-xl list-none text-foreground hover:text-primary transition-colors">
                {item.q}
              </summary>
              <p className="mt-4 font-mono text-foreground/80 leading-relaxed max-w-3xl">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
