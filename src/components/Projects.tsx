import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
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

  const filters = ["All", "Web", "Mobile", "Backend", "Design"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web",
      description: "Platform e-commerce lengkap dengan payment gateway dan inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
      tech: ["React", "Node.js", "MongoDB"],
      color: "from-purple to-pink",
    },
    {
      id: 2,
      title: "Food Delivery App",
      category: "Mobile",
      description: "Aplikasi delivery makanan dengan real-time tracking dan multi-payment.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60",
      tech: ["React Native", "Firebase"],
      color: "from-cyan to-purple",
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      category: "Web",
      description: "Dashboard analytics untuk rumah sakit dengan visualisasi data pasien.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      color: "from-pink to-orange",
    },
    {
      id: 4,
      title: "Inventory Management API",
      category: "Backend",
      description: "RESTful API untuk manajemen inventori dengan real-time sync.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
      tech: ["Node.js", "Express", "MySQL"],
      color: "from-green to-cyan",
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: "Mobile",
      description: "Aplikasi tracking fitness dengan AI coach dan social features.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=60",
      tech: ["Flutter", "Firebase", "TensorFlow"],
      color: "from-orange to-yellow",
    },
    {
      id: 6,
      title: "Banking UI Kit",
      category: "Design",
      description: "UI kit lengkap untuk aplikasi fintech dengan 50+ komponen.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
      tech: ["Figma", "Design System"],
      color: "from-yellow to-green",
    },
    {
      id: 7,
      title: "Real Estate Portal",
      category: "Web",
      description: "Portal properti dengan virtual tour dan sistem booking online.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
      tech: ["Next.js", "Prisma", "AWS"],
      color: "from-purple to-cyan",
    },
    {
      id: 8,
      title: "Social Media API",
      category: "Backend",
      description: "Scalable API untuk platform social media dengan 100k+ users.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60",
      tech: ["Go", "Redis", "GraphQL"],
      color: "from-pink to-purple",
    },
    {
      id: 9,
      title: "Education Platform",
      category: "Web",
      description: "LMS dengan video streaming, quiz, dan sertifikasi online.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60",
      tech: ["React", "Django", "AWS"],
      color: "from-cyan to-green",
    },
    {
      id: 10,
      title: "Travel Companion App",
      category: "Mobile",
      description: "Aplikasi travel dengan AI itinerary planner dan offline maps.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=60",
      tech: ["React Native", "Node.js", "MongoDB"],
      color: "from-orange to-pink",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-muted/30"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-primary font-semibold mb-4 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Project
            <span className="gradient-text"> Terbaru </span>
            Kami
          </h2>
          <p className="text-lg text-muted-foreground">
            Lihat beberapa project yang telah kami kerjakan untuk berbagai klien
          </p>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? "gradient-primary text-white"
                  : "bg-card border border-border hover:border-primary/30 text-foreground/70 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-60 transition-opacity`} />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white mb-3`}>
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
          <Button 
            size="lg" 
            variant="outline"
            className="font-semibold px-8 border-2 hover:bg-primary/5"
          >
            Lihat Semua Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
