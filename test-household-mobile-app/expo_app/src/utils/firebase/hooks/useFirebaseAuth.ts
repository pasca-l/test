import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import { AUTHENTICATION } from "@/utils/firebase/firebaseConfig";

export const useFirebaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(AUTHENTICATION, async (user) => {
      return user ? setUser(user) : setUser(null);
    });

    return () => unsubscribe();
  }, []);

  return user;
};
