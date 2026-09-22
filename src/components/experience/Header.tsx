import { useEffect, useRef } from "react"

import gsap from "gsap"

interface Props {
  started: boolean
}

export function Header({ started }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!started || !ref.current) return

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: -25,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.6,
        delay: 0.8,
        ease: "power3.out",
      },
    )
  }, [started])

  return (
    <header
      ref={ref}
      className="pointer-events-none absolute left-0 top-0 z-40 w-full px-5 pt-6 text-center opacity-0 md:pt-8"
    >
      <p className="eyebrow">Un pequeño presente</p>
      <h1 className="mt-2 font-serif text-[1.35rem] font-normal tracking-[-0.02em] text-[#fff7d6] md:text-[1.75rem]">
        Flores amarillas para alegrar tu día
      </h1>
      <p className="mt-2 text-sm font-light text-[#f8e9ac]/55">
        Un detalle sencillo, solo porque sí.
      </p>
    </header>
  )
}
