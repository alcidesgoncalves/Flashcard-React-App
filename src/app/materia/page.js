"use client";
import { CardMateria } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { Api } from "@/server/api";
import { FormCard } from "@/components/FormCard";
export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="flex flex-col justify-between p-24">
        <Navbar />
        <FormCard />
      </div>
    </main>
  );
}
