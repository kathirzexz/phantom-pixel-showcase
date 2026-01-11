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
        // Galaxy cyan for dark, ocean blue for light
        value: isDark ? "#5eead4" : "#2e8bc0",
      },
      links: {
        color: isDark ? "#5eead4" : "#2e8bc0",
        distance: 150,
        enable: true,
        opacity: isDark ? 0.12 : 0.15,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          width: 1200,
          height: 800,
        },
        value: isDark ? 100 : 60,
      },
      opacity: {
        value: isDark ? 0.5 : 0.4,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: isDark ? 3 : 2 },
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
