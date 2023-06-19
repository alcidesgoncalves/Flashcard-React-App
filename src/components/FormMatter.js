import { Api } from '@/server/api'
import * as Dialog from '@radix-ui/react-dialog'
import { Slot } from '@radix-ui/react-slot'
import { useState } from 'react'

export default function FormMatt() {
  const [nameMateria, setName] = useState('')
  const [assunto, setAssunto] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    try {
      console.log(data)
      await Api.post('disciplina/', {
        name: data.name_materia,
        name_assunto: data.assunto,
        description: '...',
      }).then((response) => console.log('criado'))
    } catch (error) {
      console.log(error)
    }
  }

  console.log(assunto)
  return (
    <Slot>
      <Dialog.Content className="fixed left-1/2 top-1/2 w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#2A2634] px-10 py-8 text-white shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Criar Matéria
        </Dialog.Title>
        <form onSubmit={handleSubmit}>
          <fieldset className="mb-[15px] flex flex-col">
            <label
              className="text-violet11 w-[90px] text-[25px]"
              htmlFor="name_materia"
            >
              Nome
            </label>
            <input
              placeholder="Ex. Matemática"
              type="text"
              name="name_materia"
              className="bg-blackA5 shadow-blackA9 selection:color-white selection:bg-blackA9 box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] p-6 px-[10px]  text-[20px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              id="name"
              value={nameMateria}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset className="mb-[15px] flex flex-col">
            <label
              className="text-violet11 w-[90px] text-[25px]"
              htmlFor="assunto"
            >
              Assunto
            </label>
            <input
              placeholder="Ex. Geometria"
              type="text"
              name="assunto"
              className="bg-blackA5 shadow-blackA9 selection:color-white selection:bg-blackA9 box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] p-6 px-[10px]  text-[20px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              id="assunto"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
            />
          </fieldset>

          <div className="mt-[25px] flex justify-end gap-4">
            <Dialog.Close asChild>
              <button className="focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-red-400 px-[15px] font-medium leading-none text-black hover:bg-red-600 focus:shadow-[0_0_0_2px] focus:outline-none">
                Cancelar
              </button>
            </Dialog.Close>

            <button
              type="submit"
              className="focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-green-500 px-[15px] font-medium leading-none text-black hover:bg-green-600 focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              Criar
            </button>
          </div>
        </form>
      </Dialog.Content>
    </Slot>
  )
}
