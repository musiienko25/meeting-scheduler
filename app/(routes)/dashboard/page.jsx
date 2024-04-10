"use client";

import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";
import { app } from "@/config/FirebaseConfig";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useKindeBrowserClient();
  const [loading, setLoading] = useState();

  useEffect(() => {
    user && isBusinessRegistered();
  }, [user]);

  const isBusinessRegistered = async () => {
    const db = getFirestore(app);

    const docRef = doc(db, "Business", user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setLoading(false);
    } else {
      // docSnap.data() will be undefined in this case
      setLoading(false);
      console.log("No such document!");
      router.replace("/create-business");
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <LogoutLink>Log out</LogoutLink>
    </div>
  );
};

export default Dashboard;
