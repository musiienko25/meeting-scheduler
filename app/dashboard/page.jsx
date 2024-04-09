"use client";

import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import { app } from "@/config/FirebaseConfig";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { user } = useKindeBrowserClient();

  const router = useRouter();
  useEffect(() => {
    user && isBusinessRegistered();
  }, [user]);

  const isBusinessRegistered = async () => {
    const db = getFirestore(app);

    const docRef = doc(db, "BUSINESS", user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      router.replace("./create-business");
    }
  };

  return (
    <div>
      <LogoutLink>Log out</LogoutLink>
    </div>
  );
};

export default Dashboard;
