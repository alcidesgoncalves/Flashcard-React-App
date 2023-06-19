import Image from 'next/image'
// import { Button } from './Buttton'
import * as Dialog from '@radix-ui/react-dialog'
import FormMatt from './FormMatter'

export function Navbar() {
  return (
    <div className=" flex  items-center rounded-lg bg-secondary-color p-8 ">
      <Image
        src="/home/card.png"
        width={150}
        height={50}
        alt="Flashcard Picture "
        className="mr-4"
        blurDataURL={'/home/card.png'}
      />
      <span className="text-ti m-0 text-5xl font-bold text-textual-color">
        FlashCards
      </span>

      {/* ml-auto flex justify-center rounded-lg bg-tertiary-color px-16 py-7 text-center text-2xl font-bold text-secondary-color */}

      <Dialog.Root>
        <Dialog.Trigger
          asChild
          className="hover:bg- group: ml-auto flex cursor-pointer items-center justify-center rounded-lg rounded-lg bg-textual-color p-2 text-center text-2xl text-base font-bold text-white duration-0 hover:bg-tertiary-color hover:duration-500"
        >
          <span className="ml-3">Criar Matéria</span>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60" />

          <FormMatt />
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
