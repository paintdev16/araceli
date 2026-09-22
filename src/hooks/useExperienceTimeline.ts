import { useEffect } from "react"

import gsap from "gsap"

interface Options {
  started: boolean
  onHeart?: () => void
  onEnding?: () => void
}

export function useExperienceTimeline({
  started,
  onHeart,
  onEnding,
}: Options) {
  useEffect(() => {
    if (!started) return

    const timeline = gsap.timeline()

    timeline
      .call(() => {
        // Inicio de la experiencia.
      })
      .call(
        () => {
          onHeart?.()
        },
        [],
        5,
      )
      .call(
        () => {
          onEnding?.()
        },
        [],
        20,
      )

    return () => {
      timeline.kill()
    }
  }, [started, onHeart, onEnding])
}