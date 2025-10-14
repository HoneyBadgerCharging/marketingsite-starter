import { ShieldCheck, Smartphone, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable",
    heading: "Built for Performance",
    description:
      "HoneyBadger's chargers are built with the latest technology and undergo rigorous testing to ensure optimal performance and durability. Say goodbye to any worries about malfunctions or disruptions while charging.",
    highlights: ["Latest Technology", "Rigorous Testing", "Zero Downtime"],
    underlineColor: "bg-primary",
  },
  {
    icon: Smartphone,
    title: "Easy",
    heading: "Seamless Control",
    description:
      "HoneyBadger chargers come equipped with a large LCD display for effortless user navigation. Our mobile app enhances the charging experience by enabling easy pre-booking, convenient mobile wallet integration, and live charging status updates.",
    highlights: ["Easy Pre-booking", "Mobile Payments", "Live Updates"],
    underlineColor: "bg-primary",
  },
  {
    icon: Zap,
    title: "Fast",
    heading: "Power Up Quickly",
    description:
      "Experience the future of charging with solutions designed to deliver power up to 2.5x faster than competing Level 2 chargers, empowering drivers to get back on the road quickly and hassle-free.",
    highlights: ["2.5x Faster", "Level 2 Power", "Quick Start"],
    underlineColor: "bg-primary",
  },
];

export const Experience = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>(
    new Array(features.length).fill(false)
  );
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleFeatures((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/charging-station.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="w-full pl-8 pr-0 md:pl-16 lg:pl-32 xl:pl-48 relative z-10">
        <div className="text-white mb-16 max-w-[800px]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">
            <span className="text-foreground">The </span>
            <span className="text-primary">HoneyBadger</span>
            <br />
            <span className="text-foreground">Experience</span>
          </h2>
        </div>

        <div className="max-w-[800px] space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleFeatures[index];

            return (
              <div
                key={index}
                ref={(el) => (refs.current[index] = el)}
                className={`relative p-8 rounded-xl border border-white/[0.08] hover:border-white/[0.15] backdrop-blur-xl transition-all duration-700 overflow-hidden group
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  background:
                    "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div className="relative z-10 flex gap-8">
                  <div className="flex items-center relative min-w-[200px] p-4">
                    <h3 className="text-3xl font-bold text-white leading-tight">
                      <span className="relative inline-block">
                        {feature.title.split("\n").map((line, i) => (
                          <div key={i} className="block">
                            {line}
                          </div>
                        ))}
                        <div className="absolute left-0 -bottom-2 h-[6px] w-full bg-primary"></div>
                      </span>
                    </h3>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-white leading-relaxed">
                      <span className="font-semibold text-white">
                        {feature.heading}
                      </span>{" "}
                      — {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {feature.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-white/5 text-white text-sm font-medium rounded-md border border-white/10"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2">
                      <a
                        href="#"
                        className="inline-flex items-center text-white hover:opacity-80 font-medium transition-colors"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
