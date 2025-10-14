import { useState as useCardHover } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Start",
    description: "Assess your electrical infrastructure\nUnderstand your specific business needs\nDesign a tailored solution for your property\nCreate custom parking stall and wall designs",
    image: "/stock-photos/consultation-site-visit.png"
  },
  {
    number: "2",
    title: "Install",
    description: "Perform necessary infrastructure upgrades\nComplete all groundwork preparation\nOrder and install charging terminals\nSeamlessly integrate into your property",
    image: "/stock-photos/installation.png"
  },
  {
    number: "3",
    title: "Support",
    description: "Connect to operational management software\nEnable driver booking via HoneyBadger app\nProvide zero-cost maintenance\nOffer ongoing support for optimal performance",
    image: "/stock-photos/network-connection.png"
  }
];

export const ValueProposition = () => {
  const navigate = useNavigate();
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(steps.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => {
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
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-full mx-auto mb-12">
          {steps.map((step, index) => {
            const isVisible = visibleSteps[index];
            const [isHovered, setIsHovered] = useState(false);
            
            return (
              <div
                key={index}
                ref={el => refs.current[index] = el}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Content */}
                <div className="relative p-10 z-10">
                  {/* Number and Title */}
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-3xl font-bold text-foreground">{step.number}</span>
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <div className="text-lg leading-relaxed text-foreground whitespace-pre-line">
                    {step.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            onClick={() => navigate('/host-charger')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl"
          >
            Book a Site Visit
          </Button>
        </div>
      </div>
    </section>
  );
};