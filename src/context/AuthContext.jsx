import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase/auth";
import { createUserDocument } from "../firebase/firestore";

import LoadingScreen from "../components/ui/LoadingScreen";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Create Firestore document if it doesn't exist
        await createUserDocument(currentUser);
      }

      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
  return <LoadingScreen />;
}

return (

<AuthContext.Provider
value={{ user }}
>

{children}

</AuthContext.Provider>

);
}

export function useAuth() {
  return useContext(AuthContext);
}