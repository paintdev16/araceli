import { useEffect } from "react"

import { X } from "lucide-react"

interface Props {
  open: boolean
  onClose: () => void
}

export function LetterModal({
  open,
  onClose,
}: Props) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKeyDown)

    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      onClick={onClose}
      className="modal-backdrop fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-xl md:p-6"
      role="presentation"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="letter-card relative w-full max-w-[31rem] overflow-hidden rounded-[2rem] p-7 text-left md:p-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="letter-title"
      >
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#f4c644]/10 blur-3xl" />

        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-[#f6dc73]/15 bg-white/[0.03] text-[#fff8dc]/55 transition hover:border-[#f6dc73]/35 hover:text-[#fff8dc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4c644]"
          aria-label="Cerrar mensaje"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <p className="eyebrow">Para Araceli</p>

        <h2 id="letter-title" className="mt-4 max-w-sm font-serif text-[2.3rem] leading-[1.05] tracking-[-0.035em] text-[#fff8dc] md:text-[3rem]">
          Un detalle para ti
        </h2>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-[#f4c644]/45 via-[#f4c644]/10 to-transparent" />

        <p className="mt-7 text-[1rem] leading-7 text-[#fff8dc]/70 md:text-[1.05rem] md:leading-8">
          No hace falta conocerse mucho para tener un gesto bonito. Quise
          enviarte estas flores como una forma sencilla de desearte un día
          tranquilo, ligero y con algún motivo para sonreír.
        </p>

        <p className="mt-5 font-serif text-xl italic leading-7 text-[#f6d45d]">
          Espero que te alegren un ratito.
        </p>

        <div className="mt-9 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-5">
          <span className="text-xs uppercase tracking-[0.2em] text-[#fff8dc]/35">Con buena intención</span>
          <span className="text-3xl" role="img" aria-label="Girasol">🌻</span>
        </div>
      </div>
    </div>
  )
}
