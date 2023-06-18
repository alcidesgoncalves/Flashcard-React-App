import { Dialog } from '@radix-ui/react-dialog'

export function Button({ ...props }) {
  return (
    <Dialog.Trigger className="flex items-center rounded-lg p-2 text-base font-bold text-white duration-0 hover:bg-purple-800 hover:duration-500">
      <span className="ml-3">{props.span}</span>
    </Dialog.Trigger>
  )
}
