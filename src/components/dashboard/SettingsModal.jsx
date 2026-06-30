import { X, User, Bot, Bell, Moon, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function SettingsModal({
  isOpen,
  onClose,
  user,
}) {
  if (!isOpen) return null;

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            ⚙️ Settings
          </h2>

          <button onClick={onClose}>
            <X className="text-slate-400 hover:text-white" />
          </button>

        </div>

        <div className="mt-8 space-y-6">

          <div className="flex items-center gap-4">
            <User className="text-violet-400" />
            <div>
              <p className="text-white font-semibold">
                {user?.displayName}
              </p>
              <p className="text-slate-400 text-sm">
                {user?.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Bot className="text-blue-400" />
            <div>
              <p className="text-white">AI Model</p>
              <p className="text-slate-400 text-sm">
                Gemini 2.5 Flash
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Moon className="text-purple-400" />
            <div>
              <p className="text-white">Theme</p>
              <p className="text-slate-400 text-sm">
                Dark Mode
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Bell className="text-yellow-400" />
            <div>
              <p className="text-white">Notifications</p>
              <p className="text-slate-400 text-sm">
                Coming Soon
              </p>
            </div>
          </div>

        </div>

        <button
          onClick={handleLogout}
          className="mt-8 w-full rounded-xl bg-red-500 hover:bg-red-600 py-3 text-white font-semibold flex items-center justify-center gap-2"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </div>
  );
}