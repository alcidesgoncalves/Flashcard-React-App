'use client'
import { CardMateria } from '@/components/Card'
import { Navbar } from '@/components/Navbar'
import { Api } from '@/server/api'
import { useEffect, useState } from 'react'
export default function Home() {
  const [materia, setMateria] = useState([])

  useEffect(() => {
    getMateria()
  }, [])

  async function getMateria() {
    await Api.get('disciplina/').then((response) => {
      setMateria(response.data)
    })
  }

  return (
    <main className="min-h-screen ">
      <div className="flex flex-col justify-between p-24">
        <Navbar />
      </div>
      <div className="m-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {materia.map((e, index) => {
          return (
            <CardMateria key={e.id} name={e.name} assunto={e.name_assunto} />
          )
        })}
      </div>
    </main>
  )
}

// <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
