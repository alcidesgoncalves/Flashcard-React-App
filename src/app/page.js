"use client";
import { CardMateria } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { Api } from "@/server/api";
import { useEffect, useState } from "react";
import { Button } from "@/components/Buttton";
export default function Home() {
  const [materia, setMateria] = useState([]);

  useEffect(() => {
    getMateria();
  }, []);

  async function getMateria() {
    await Api.get("disciplina/").then((response) => {
      setMateria(response.data);
    });
  }

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="">
        <Navbar />
      </div>
      {/* {materia.map((e, index) => {
        return (
          <CardMateria key={e.id} name={e.name} assunto={e.name_assunto} />
        );
      })} */}
    </main>
  );
}

// <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
