import FloatingParticles from "./animations/FloatingParticles";

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1020] via-[#1E1B4B] to-[#0F172A]" />

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-violet-600/20 blur-[180px] rounded-full top-[-150px] left-[-150px]" />

      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[180px] rounded-full bottom-[-150px] right-[-150px]" />

      {/* Floating AI Particles */}
      <FloatingParticles />

    </div>
  );
}