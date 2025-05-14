import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiReactrouter,
  SiNodedotjs,
  SiSpringboot,
  SiTensorflow,
  SiMysql,
  SiJsonwebtokens,
  SiDocker
} from "react-icons/si";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useRef, useState } from "react";

const technologies = [
  {
    category: "Orchestration",
    items: [
      { 
        name: "Docker", 
        description: "Container orchestration for seamless deployment and scaling",
        icon: SiDocker,
        color: "text-blue-500"
      }
    ]
  },
  {
    category: "Frontend",
    items: [
      { 
        name: "React.js", 
        description: "UI component library for building interactive interfaces",
        icon: SiReact,
        color: "text-blue-400"
      },
      { 
        name: "TypeScript", 
        description: "Type-safe JavaScript for robust development",
        icon: SiTypescript,
        color: "text-blue-600"
      },
      { 
        name: "Tailwind CSS", 
        description: "Utility-first CSS framework for rapid UI development",
        icon: SiTailwindcss,
        color: "text-cyan-400"
      },
      { 
        name: "React Router", 
        description: "Declarative routing for React applications",
        icon: SiReactrouter,
        color: "text-red-400"
      },
    ]
  },
  {
    category: "Backend",
    items: [
      { 
        name: "Spring Boot", 
        description: "Java-based framework for building robust REST APIs",
        icon: SiSpringboot,
        color: "text-green-400"
      },
      { 
        name: "JWT", 
        description: "Secure authentication and authorization",
        icon: SiJsonwebtokens,
        color: "text-purple-400"
      },
    ]
  },
  {
    category: "AI & Data",
    items: [
      { 
        name: "TensorFlow", 
        description: "Open-source machine learning framework",
        icon: SiTensorflow,
        color: "text-orange-500"
      },
      { 
        name: "FaceNet PyTorch", 
        description: "Deep learning face recognition framework",
        icon: SiTensorflow,
        color: "text-red-500"
      },
      { 
        name: "FAISS", 
        description: "Efficient similarity search and clustering of dense vectors",
        icon: SiTensorflow,
        color: "text-blue-400"
      },
      { 
        name: "MySQL", 
        description: "Relational database management system",
        icon: SiMysql,
        color: "text-blue-500"
      },
    ]
  }
];

const connectingLineAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { 
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.5 }
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Technical() {
  const isMobile = useIsMobile();
  const [lines, setLines] = useState<{ id: string, x1: number, y1: number, x2: number, y2: number }[]>([]);
  const techRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const calculateLines = () => {
      if (!techRef.current) return;
      
      const dockerCard = cardsRef.current.get("Orchestration");
      if (!dockerCard) return;
      
      // Skip line calculation on very small screens
      if (window.innerWidth < 640) {
        setLines([]);
        return;
      }
      
      const dockerRect = dockerCard.getBoundingClientRect();
      const techRect = techRef.current.getBoundingClientRect();
      
      const dockerCenterX = dockerRect.left + dockerRect.width / 2 - techRect.left;
      const dockerBottomY = dockerRect.bottom - techRect.top;
      
      const newLines: { id: string, x1: number, y1: number, x2: number, y2: number }[] = [];
      
      ["Frontend", "Backend", "AI & Data"].forEach(category => {
        const categoryCard = cardsRef.current.get(category);
        if (categoryCard) {
          const categoryRect = categoryCard.getBoundingClientRect();
          const categoryCenterX = categoryRect.left + categoryRect.width / 2 - techRect.left;
          const categoryTopY = categoryRect.top - techRect.top;
          
          newLines.push({
            id: `line-${category}`,
            x1: dockerCenterX,
            y1: dockerBottomY,
            x2: categoryCenterX,
            y2: categoryTopY
          });
        }
      });
      
      setLines(newLines);
    };

    // Calculate lines on mount and window resize
    calculateLines();
    window.addEventListener("resize", calculateLines);
    
    // Small delay to ensure all elements are properly rendered
    const timer = setTimeout(calculateLines, 500);

    return () => {
      window.removeEventListener("resize", calculateLines);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white">Technical Stack</h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 px-2">
            Built with cutting-edge technologies to ensure security, performance, and a seamless user experience.
          </p>
        </div>

        <div className="relative" ref={techRef}>
          {/* SVG for connecting lines - only show on non-mobile */}
          {!isMobile && (
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
              {lines.map((line) => (
                <motion.path
                  key={line.id}
                  d={`M${line.x1},${line.y1} C${line.x1},${line.y1 + 50} ${line.x2},${line.y2 - 50} ${line.x2},${line.y2}`}
                  stroke="url(#techGradient)"
                  strokeWidth="2"
                  fill="none"
                  variants={connectingLineAnimation}
                  initial="hidden"
                  animate="visible"
                  strokeLinecap="round"
                  strokeDasharray="5,5"
                  className="dark:opacity-70"
                />
              ))}
              {/* Gradient definition for lines */}
              <defs>
                <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
            </svg>
          )}

          <div className="grid grid-cols-1 gap-12 md:gap-20">
            {/* Docker Orchestration at the top */}
            <div className="flex justify-center">
              <motion.div
                ref={(el) => el && cardsRef.current.set("Orchestration", el)}
                variants={cardVariants}
                className="w-full max-w-md"
              >
                <Card className="relative overflow-hidden bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-blue-500/50 hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <SiDocker className="w-10 h-10 text-blue-500 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-white">Docker Orchestration</h4>
                        <p className="text-sm text-gray-300">Container orchestration for seamless deployment and scaling</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Other technology categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {technologies.slice(1).map((category) => (
                <motion.div
                  key={category.category}
                  ref={(el) => el && cardsRef.current.set(category.category, el)}
                  variants={cardVariants}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((tech) => (
                      <motion.div
                        key={tech.name}
                        variants={cardVariants}
                        whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
                        className="group"
                      >
                        <Card className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <tech.icon className={`w-6 h-6 ${tech.color} flex-shrink-0`} />
                              <div>
                                <h4 className="text-base font-semibold text-white">{tech.name}</h4>
                                <p className="text-xs text-gray-400">{tech.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
