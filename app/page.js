import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Button variant="destructive">Subscribe</Button>
    </main>
  );
}
