import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const STATS = [
  { value: 18000, suffix: "+", label: "Pets treated" },
  { value: 12, suffix: " yrs", label: "Years in Jaipur" },
  { value: 24, suffix: "/7", label: "Emergency care" },
  { value: 98, suffix: "%", label: "Owner satisfaction" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-extrabold text-white sm:text-5xl">
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-primary-600 py-16 sm:py-20">
      <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 font-display text-sm font-medium text-white/70">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
