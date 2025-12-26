import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

interface ParticlesBackgroundProps {
  variant?: "dark" | "light";
}

const ParticlesBackground = ({ variant = "dark" }: ParticlesBackgroundProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const isDark = variant === "dark";

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: false,
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      color: {
        value: isDark ? "#3b82f6" : "#1e40af",
      },
      links: {
        color: isDark ? "#3b82f6" : "#1e40af",
        distance: 150,
        enable: true,
        opacity: isDark ? 0.15 : 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          width: 1200,
          height: 800,
        },
        value: 80,
      },
      opacity: {
        value: isDark ? 0.4 : 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), [isDark]);

  if (!init) {
    return null;
  }

  return (
    <div className="particles-container">
      <Particles
        id={`tsparticles-${variant}`}
        options={options}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticlesBackground;
