'use client'
import { CardMateria } from '@/components/Card'
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {materia.map((e, index) => {
          return (
            <CardMateria key={e.id} name={e.name} assunto={e.name_assunto} />
          )
        })}
      </div>
    </main>
  )
}
