import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Team = () => {
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

  const team = [
    {
      name: "Ahmad Geo",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
      bio: "Full-stack developer dengan 5+ tahun pengalaman dalam web & mobile development.",
      color: "from-purple to-pink",
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Siti Rahma",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
      bio: "Designer kreatif yang fokus pada user experience dan visual yang memukau.",
      color: "from-cyan to-purple",
      socials: {
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Budi Santoso",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
      bio: "Expert dalam arsitektur sistem dan database dengan fokus pada performa.",
      color: "from-pink to-orange",
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Dewi Lestari",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
      bio: "Specialist React & Vue dengan passion untuk animasi dan interaktivitas.",
      color: "from-orange to-yellow",
      socials: {
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-primary font-semibold mb-4 block">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Kenali
            <span className="gradient-text"> Tim </span>
            Kami
          </h2>
          <p className="text-lg text-muted-foreground">
            Tim developer berbakat yang siap membantu mewujudkan ide digital Anda
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group relative ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent`} />
                  
                  {/* Social Links - Appear on Hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-display font-bold mb-1">{member.name}</h3>
                  <span className={`inline-block text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                    {member.role}
                  </span>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${member.color} opacity-10 rounded-bl-full`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
