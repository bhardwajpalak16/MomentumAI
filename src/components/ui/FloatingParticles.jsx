import { motion } from "framer-motion";

export default function FloatingParticles() {

  const particles = Array.from({ length: 35 });

  return (
    <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">

      {particles.map((_, i) => (

        <motion.div
          key={i}
          className="absolute rounded-full bg-violet-400/20"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -250],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 8,
          }}
        />

      ))}

    </div>
  );
}