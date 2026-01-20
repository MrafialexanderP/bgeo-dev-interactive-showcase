import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-3xl" />
        
        {/* Floating Shapes */}
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-purple/30 rounded-xl rotate-12 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink/20 rounded-full animate-bounce-subtle" />
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-cyan/30 rotate-45 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Software Development Company</span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-5xl md:text-7xl font-display font-bold mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            We Build
            <span className="gradient-text"> Digital </span>
            Experiences That
            <span className="gradient-text"> Matter</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            bgeo dev adalah tim pengembang software yang berdedikasi menciptakan solusi digital inovatif untuk bisnis Anda
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button 
              size="lg" 
              className="gradient-primary hover:opacity-90 text-white font-semibold text-lg px-8 py-6 group"
            >
              Hubungi Kami
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-semibold text-lg px-8 py-6 border-2 hover:bg-primary/5"
            >
              Lihat Project
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            {[
              { icon: Code2, value: "10+", label: "Projects" },
              { icon: Zap, value: "4", label: "Team Members" },
              { icon: Sparkles, value: "100%", label: "Dedication" },
              { icon: ArrowRight, value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-display font-bold gradient-text">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce-subtle" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
