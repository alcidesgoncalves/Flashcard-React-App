import Image from "next/image";
import { Button } from "./Buttton";
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
      <Button />
    </div>
  );
}
