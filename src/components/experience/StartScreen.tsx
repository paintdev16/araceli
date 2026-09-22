import { useRef } from "react"
import gsap from "gsap"
import { ArrowDown } from "lucide-react"

interface StartScreenProps {
  onAudioStart: () => void
  onStart: () => void
}

export function StartScreen({ onAudioStart, onStart }: StartScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const flowerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const openingRef = useRef(false)

  const handleStart = () => {
    if (!containerRef.current || openingRef.current) return

    openingRef.current = true
    onAudioStart()

    const timeline = gsap.timeline({
      onComplete: onStart,
    })

    timeline
      .to(flowerRef.current, {
        scale: 1.35,
        rotation: 15,
        duration: 0.6,
        ease: "power2.inOut",
      })
      .to(
        textRef.current,
        {
          opacity: 0,
          y: 10,
          duration: 0.4,
        },
        "<",
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          scale: 1.08,
          filter: "blur(15px)",
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.2",
      )
  }

  return (
    <section
      ref={containerRef}
      className="start-screen absolute inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#030301] px-5"
    >
      <div className="start-orbit pointer-events-none absolute left-1/2 top-1/2 h-[min(76vw,620px)] w-[min(76vw,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(244,198,68,0.09),transparent_34%)]" />

      <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
        <p className="eyebrow">Un pequeño presente</p>

        <div
          ref={flowerRef}
          className="mt-7 select-none text-[4.5rem] drop-shadow-[0_0_30px_rgba(250,204,21,0.18)] md:text-[5.5rem]"
          role="img"
          aria-label="Girasol"
        >
          🌻
        </div>

        <div ref={textRef}>
          <h1 className="mt-6 max-w-lg font-serif text-[2.65rem] leading-[0.98] tracking-[-0.045em] text-[#fff8dc] sm:text-[3.6rem] md:text-[4.4rem]">
            Algo bonito,
            <span className="block italic text-[#f4cc50]">solo porque sí.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-[1rem] font-light leading-7 text-[#fff8dc]/55 md:text-[1.05rem]">
            A veces un detalle sencillo basta para hacer un momento un poco más especial.
          </p>
        </div>

        <button
          type="button"
          onClick={handleStart}
          className="start-button group mt-9 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium text-[#181304] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4c644]"
        >
          Descubrir el detalle
          <ArrowDown className="transition-transform duration-300 group-hover:translate-y-0.5" size={16} aria-hidden="true" />
        </button>

        <p className="mt-5 text-xs tracking-[0.08em] text-[#fff8dc]/30">
          Hecho para regalarte un momento bonito
        </p>
      </div>
    </section>
  )
}
