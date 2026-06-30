import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

export default function LoadingScreen() {

  return (

    <div className="fixed inset-0 bg-[#050816] flex flex-col items-center justify-center z-[999]">

      <motion.img

        src={logo}

        className="w-24 h-24"

        animate={{
          rotate: 360,
          scale: [1,1.08,1]
        }}

        transition={{
          duration:2,
          repeat:Infinity,
          ease:"linear"
        }}

      />

      <motion.p

        className="mt-8 text-violet-300 text-lg font-semibold"

        animate={{
          opacity:[.4,1,.4]
        }}

        transition={{
          duration:1.5,
          repeat:Infinity
        }}

      >

        Loading MomentumAI...

      </motion.p>

    </div>

  );

}