import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    "Custom Web & Mobile Development",
    "Modern Tech Stack (React, Node.js, etc)",
    "Agile Development Process",
    "Dedicated Support Team",
    "Scalable Solutions",
    "Clean & Maintainable Code",
  ];

  const values = [
    {
      icon: Target,
      title: "Misi Kami",
      description: "Membantu bisnis berkembang dengan solusi teknologi yang inovatif dan terjangkau.",
      color: "bg-purple/10 text-purple",
    },
    {
      icon: Eye,
      title: "Visi Kami",
      description: "Menjadi partner teknologi terpercaya untuk startup dan UMKM di Indonesia.",
      color: "bg-cyan/10 text-cyan",
    },
    {
      icon: Heart,
      title: "Nilai Kami",
      description: "Integritas, inovasi, dan kepuasan klien adalah prioritas utama kami.",
      color: "bg-pink/10 text-pink",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <span className="text-primary font-semibold mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Membangun Masa Depan
              <span className="gradient-text"> Digital </span>
              Bersama
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              bgeo dev adalah tim developer muda yang passionate dalam menciptakan 
              solusi software berkualitas tinggi. Dengan pengalaman dalam berbagai 
              proyek, kami siap membantu mewujudkan ide digital Anda menjadi kenyataan.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-green flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              Mulai Project Bersama Kami
              <span className="text-2xl">→</span>
            </a>
          </div>

          {/* Right Content - Values */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border/50"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center flex-shrink-0`}>
                    <value.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
