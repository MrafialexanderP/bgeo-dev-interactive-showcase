import { useEffect, useRef, useState } from "react";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Palette, 
  Settings, 
  Shield,
  ArrowUpRight
} from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Website modern dan responsif dengan performa tinggi menggunakan teknologi terbaru seperti React, Next.js, dan Vue.",
      color: "from-purple to-pink",
      iconBg: "bg-purple/10 text-purple",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Aplikasi mobile cross-platform untuk iOS dan Android dengan React Native dan Flutter.",
      color: "from-cyan to-purple",
      iconBg: "bg-cyan/10 text-cyan",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "API dan sistem backend yang robust dengan Node.js, Python, dan database management.",
      color: "from-pink to-orange",
      iconBg: "bg-pink/10 text-pink",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Desain antarmuka yang menarik dan user-friendly dengan fokus pada pengalaman pengguna.",
      color: "from-orange to-yellow",
      iconBg: "bg-orange/10 text-orange",
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Integrasi sistem dan API pihak ketiga untuk mengoptimalkan workflow bisnis Anda.",
      color: "from-green to-cyan",
      iconBg: "bg-green/10 text-green",
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Layanan pemeliharaan dan dukungan teknis 24/7 untuk menjaga aplikasi tetap optimal.",
      color: "from-yellow to-green",
      iconBg: "bg-yellow/10 text-yellow",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-primary font-semibold mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Layanan
            <span className="gradient-text"> Profesional </span>
            Kami
          </h2>
          <p className="text-lg text-muted-foreground">
            Kami menyediakan berbagai layanan pengembangan software untuk memenuhi 
            kebutuhan digital bisnis Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>

              {/* Decorative Dots */}
              <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${service.color} opacity-10 rounded-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
