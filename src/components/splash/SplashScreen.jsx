import AICore from "../common/AICore";
export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <div className="mb-8">
          <AICore />
      </div>
      <h1 className="text-6xl font-black bg-gradient-to-r from-violet-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">

        MomentumAI

      </h1>

      <p className="mt-5 text-xl text-slate-300">
        Build Momentum. Beat Every Deadline.
      </p>

      <div className="mt-10">
        <div className="w-56 h-2 rounded-full bg-slate-700 overflow-hidden">

          <div className="h-full bg-gradient-to-r from-violet-500 to-blue-500 animate-pulse w-2/3 rounded-full"></div>

        </div>

        <p className="mt-3 text-center text-slate-400">
          Initializing AI...
        </p>

      </div>

    </div>
  );
}