import Image from 'next/image'
// import { Button } from './Buttton'
import * as Dialog from '@radix-ui/react-dialog'

export function Navbar() {
  return (
    <div className=" flex  items-center rounded-lg bg-secondary-color p-8 ">
      <Image
        src="/card.png"
        width={150}
        height={50}
        alt="Flashcard Picture "
        className="mr-4"
      />
      <span className="text-ti m-0 text-5xl font-bold text-textual-color">
        FlashCards
      </span>

      {/* ml-auto flex justify-center rounded-lg bg-tertiary-color px-16 py-7 text-center text-2xl font-bold text-secondary-color */}

      <Dialog.Root>
        <Dialog.Trigger className="ml-auto flex items-center justify-center rounded-lg rounded-lg p-2 text-center text-2xl text-base font-bold text-white duration-0 hover:bg-purple-800 hover:duration-500 ">
          <span className="ml-3">Criar Matéria</span>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#2A2634] px-10 py-8 text-white shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">
              Criar Matéria
            </Dialog.Title>
            <form action="">
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label
                  className="text-violet11 w-[90px] text-right text-[15px]"
                  htmlFor="name"
                >
                  Nome
                </label>
                <input
                  className="shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  id="name"
                />
              </fieldset>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label
                  className="text-violet11 w-[90px] text-right text-[15px]"
                  htmlFor="assunto"
                >
                  Assunto
                </label>
                <input
                  className="shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  id="assunto"
                />
              </fieldset>
              <div className="mt-[25px] flex justify-end">
                <Dialog.Close asChild>
                  <button className="focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-green-500 px-[15px] font-medium leading-none text-black hover:bg-green-200 focus:shadow-[0_0_0_2px] focus:outline-none">
                    Criar
                  </button>
                </Dialog.Close>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
