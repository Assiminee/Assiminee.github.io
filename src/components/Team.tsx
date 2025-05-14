import { Linkedin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  position?: 'top' | 'bottom';
};

const teamMembers: TeamMember[] = [
  {
    id: "yasmine",
    name: "Yasmine Znatni",
    role: "Chef de Projet / AI Developer",
    image: "/lovable-uploads/755cfdbe-76f4-4afe-9bfe-54d61bea5841.png",
    linkedin: "https://www.linkedin.com/in/yasmine-znatni/",
    position: "top"
  },
  {
    id: "amine",
    name: "Mohammed Amine Esfouna",
    role: "Full Stack Developer / Front-End",
    image: "/lovable-uploads/da56b30e-fdec-4bbb-87a8-6af3e473118c.png",
    linkedin: "https://www.linkedin.com/in/mohammed-amine-esfouna/",
    position: "bottom"
  },
  {
    id: "saad",
    name: "Saad Boukil",
    role: "Full Stack Developer / Back-End",
    image: "/lovable-uploads/57f536b3-f792-4e1c-ba2a-9b199a6bf907.png",
    linkedin: "https://www.linkedin.com/in/saad-boukili-a68303224/",
    position: "bottom"
  },
  {
    id: "abdelali",
    name: "Abdelali Chergaoui",
    role: "Responsable Documentation",
    image: "/lovable-uploads/a73742b7-9e37-42ab-baea-d86113b44e67.png",
    linkedin: "https://www.linkedin.com/in/abdelali-chergaoui-b62b61225/",
    position: "bottom"
  },
  {
    id: "oussama",
    name: "Mohammed Lahkim",
    role: "Responsable Système Embarqué",
    image: "/lovable-uploads/fbcdb70b-fb39-4aae-ba1f-f20b2a288d4c.png",
    linkedin: "https://www.linkedin.com/in/mohammed-lahkim/",
    position: "bottom"
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

const cardAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Team() {
  const [lines, setLines] = useState<{ id: string, x1: number, y1: number, x2: number, y2: number }[]>([]);
  const teamRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const isMobile = useIsMobile();

  useEffect(() => {
    const calculateLines = () => {
      if (!teamRef.current) return;
      
      const leaderCard = cardsRef.current.get("yasmine");
      if (!leaderCard) return;
      
      // Skip line calculation on very small screens
      if (window.innerWidth < 640) {
        setLines([]);
        return;
      }
      
      const leaderRect = leaderCard.getBoundingClientRect();
      const teamRect = teamRef.current.getBoundingClientRect();
      
      const leaderCenterX = leaderRect.left + leaderRect.width / 2 - teamRect.left;
      const leaderBottomY = leaderRect.bottom - teamRect.top;
      
      const newLines: { id: string, x1: number, y1: number, x2: number, y2: number }[] = [];
      
      teamMembers.forEach(member => {
        if (member.position === "bottom") {
          const memberCard = cardsRef.current.get(member.id);
          if (memberCard) {
            const memberRect = memberCard.getBoundingClientRect();
            const memberCenterX = memberRect.left + memberRect.width / 2 - teamRect.left;
            const memberTopY = memberRect.top - teamRect.top;
            
            newLines.push({
              id: `line-${member.id}`,
              x1: leaderCenterX,
              y1: leaderBottomY,
              x2: memberCenterX,
              y2: memberTopY
            });
          }
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
    <section id="team" className="py-12 md:py-24 bg-white dark:bg-gray-900 dark:text-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Meet Our Team</h2>
          <div className="w-16 md:w-24 h-1 bg-tickyfy-blue mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300 px-2">
            The talented individuals behind the TickeFy project, working together to revolutionize
            the ticketing experience for CAN 2025 in Morocco.
          </p>
        </div>

        <div className="relative" ref={teamRef}>
          {/* SVG for connecting lines - only show on non-mobile */}
          {!isMobile && (
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
              {lines.map((line) => (
                <motion.path
                  key={line.id}
                  d={`M${line.x1},${line.y1} C${line.x1},${line.y1 + 50} ${line.x2},${line.y2 - 50} ${line.x2},${line.y2}`}
                  stroke="url(#lineGradient)"
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
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0FA0CE" />
                  <stop offset="100%" stopColor="#4CAF50" />
                </linearGradient>
              </defs>
            </svg>
          )}
          
          {/* Team hierarchy grid */}
          <div className="grid grid-cols-1 gap-12 md:gap-20">
            {/* Leader (top position) */}
            <div className="flex justify-center">
              {teamMembers
                .filter(member => member.position === "top")
                .map((member, index) => (
                  <motion.div
                    key={member.id}
                    className="w-full max-w-xs"
                    ref={(el) => el && cardsRef.current.set(member.id, el)}
                    variants={cardAnimation}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                  >
                    <TeamMemberCard member={member} isLeader={true} />
                  </motion.div>
                ))}
            </div>
            
            {/* Team members (bottom position) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-6">
              {teamMembers
                .filter(member => member.position === "bottom")
                .map((member, index) => (
                  <motion.div
                    key={member.id}
                    ref={(el) => el && cardsRef.current.set(member.id, el)}
                    variants={cardAnimation}
                    custom={index + 1} // +1 to delay after leader
                    initial="hidden"
                    animate="visible"
                  >
                    <TeamMemberCard member={member} isLeader={false} />
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member, isLeader }: { member: TeamMember, isLeader: boolean }) {
  return (
    <motion.div 
      className={`bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 h-full
        ${isLeader ? 'ring-4 ring-tickyfy-blue/30 dark:ring-tickyfy-blue/20' : ''}`}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 } 
      }}
    >
      <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden group">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {isLeader && (
          <motion.div 
            className="absolute top-4 right-4 bg-tickyfy-blue/90 text-white text-xs font-bold px-3 py-1 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 500, damping: 15 }}
          >
            Team Lead
          </motion.div>
        )}
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 dark:text-gray-400">{member.role}</p>
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            size="sm"
            className="border-tickyfy-blue text-tickyfy-blue hover:bg-tickyfy-blue/10 dark:border-tickyfy-blue/70 dark:text-tickyfy-blue/90 min-h-9 touch-target"
            asChild
          >
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Linkedin className="mr-2 h-4 w-4" />
              <span className="text-xs md:text-sm">LinkedIn</span>
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="min-h-9 touch-target"
            asChild
          >
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-tickyfy-green dark:text-gray-400">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
