import { motion } from "framer-motion";

export default function FloatingParticles() {
  const particles = Array.from({ length: 35 });

  return (
    <>
      {particles.map((_, index) => {
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-violet-400/60"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
}