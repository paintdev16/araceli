import { ArrowUpRight, Mail } from "lucide-react"

interface Props {
  onClick: () => void
}

export function LetterButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="letter-trigger group fixed bottom-6 left-1/2 z-50 flex min-w-max -translate-x-1/2 items-center gap-3 rounded-full px-3 py-2.5 pl-5 text-sm text-[#fff8dc] md:bottom-8"
      aria-label="Abrir el mensaje para ti"
    >
      <Mail size={16} aria-hidden="true" />
      <span>Hay un mensaje para ti</span>
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f4c644] text-[#181304] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
        <ArrowUpRight size={15} aria-hidden="true" />
      </span>
    </button>
  )
}
