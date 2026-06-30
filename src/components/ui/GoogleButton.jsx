import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { signInWithGoogle } from "../../firebase/auth";
import { createUserDocument } from "../../firebase/firestore";

export default function GoogleButton() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      // Google Authentication
      const result = await signInWithGoogle();

      // Create Firestore user profile
      await createUserDocument(result.user);

      console.log("✅ Logged In:", result.user.displayName);

      // Redirect to Dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Login Error:", error);
      alert(error.message);
    }
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={handleGoogleLogin}
      className="
        mt-10
        w-full
        flex
        items-center
        justify-center
        gap-3
        py-4
        rounded-2xl
        bg-white
        text-slate-800
        font-semibold
        shadow-xl
        transition-all
        duration-300
        hover:shadow-violet-500/40
      "
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google"
        className="w-6 h-6"
      />

      Continue with Google
    </motion.button>
  );
}