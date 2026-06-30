import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mb-8"
    >
      <h2 className="text-4xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-slate-400 text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}