import { useEffect, useRef, useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
  Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim! 🎉",
      description: "Terima kasih! Kami akan segera menghubungi Anda.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@bgeodev.com",
      link: "mailto:hello@bgeodev.com",
      color: "bg-purple/10 text-purple",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+62 812 3456 7890",
      link: "https://wa.me/6281234567890",
      color: "bg-green/10 text-green",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jakarta, Indonesia",
      link: "#",
      color: "bg-pink/10 text-pink",
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink/10 hover:text-pink" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-cyan/10 hover:text-cyan" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-purple/10 hover:text-purple" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-cyan/10 hover:text-cyan" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-muted/30"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-primary font-semibold mb-4 block">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Hubungi
            <span className="gradient-text"> Kami </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Punya project atau ide yang ingin diwujudkan? Kami siap membantu!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`${isVisible ? "animate-fade-in-left" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
              <h3 className="text-2xl font-display font-bold mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nama</label>
                    <Input
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    placeholder="Tentang apa?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Pesan</label>
                  <Textarea
                    placeholder="Ceritakan project Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-primary hover:opacity-90 text-white font-semibold group"
                >
                  Kirim Pesan
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:-translate-x-1 group"
                >
                  <div className={`w-14 h-14 rounded-xl ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="text-lg font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 gradient-primary rounded-2xl text-white hover:opacity-90 transition-opacity group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Butuh respons cepat?</p>
                  <p className="text-xl font-bold">Chat via WhatsApp</p>
                </div>
              </div>
            </a>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-muted-foreground mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center transition-all ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
