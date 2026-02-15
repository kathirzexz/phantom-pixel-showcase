import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Obstacle-Avoiding-Robot-And-bluetooth-Voice-Controller",
    description: "Obstacle-avoiding, Bluetooth, and voice-controlled robots demonstrate autonomous movement, wireless control, and hands-free operation in robotics.",
    techStack: ["Arduino", "C/C++", "Ultrasonic Sensor", "Bluetooth", "Voice Recognition"],
    githubUrl: "https://github.com/kathirzexz/Obstacle-Avoiding-Robot-And-bluetooth-Voice-Controller",
   // liveUrl: "https://example.com",

   image:"/projects/robot.jpg"
  },
  {
    title: "ESP32-Air-Mouse",
    description: "Turns your ESP32 into a wireless BLE air mouse using the MPU6050 motion sensor—board movement controls cursor motion, and buttons perform click actions.",
    techStack: ["ESP32", "MPU6050", "BLE", "Arduino IDE", "C/C++"],
    githubUrl: "https://github.com/kathirzexz/ESP32-Air-Mouse",
   // liveUrl: "https://example.com",
  },
  {
    title: "Radar-System-With-Arduino",
    description: "An Arduino radar system uses an Arduino board, ultrasonic sensor, and servo motor to detect objects. The sensor scans an area by rotating, measures distance using sound waves, and displays object position, simulating basic radar operation.",
    techStack: ["Arduino", "Ultrasonic Sensor", "Servo Motor", "C/C++", "Processing"],
    githubUrl: "https://github.com/kathirzexz/Radar-System-With-Arduino-?tab=readme-ov-file#radar-system-with-arduino-",
   // liveUrl: "https://example.com",
  },
  {
    title: "Clap-Switch",
    description: "A clap switch can control not only lamps but also home appliances like fans and lights by detecting clap sounds and switching AC loads (110–240V) safely using a relay.",
    techStack: ["Arduino", "Sound Sensor (Microphone)", "Relay Module", "C/C++", "AC Power (110–240V)"],
    githubUrl: "https://github.com/kathirzexz/Clap-Switch",
  },
  
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticlesBackground />
      <Navigation showBack />
      <SocialSidebar />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[15vw] sm:text-[12vw] md:text-[15vw] font-display font-bold tracking-tighter text-foreground/[0.03] select-none">
          PROJECTS
        </span>
      </div>

      <main className="relative z-10 min-h-screen px-4 sm:px-6 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-foreground mb-3 sm:mb-4"
            >
              My <span className="text-gradient font-medium">Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-2"
            >
              A selection of projects I've worked on, showcasing my skills in 
              full-stack development and problem-solving.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
