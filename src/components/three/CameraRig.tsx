import { useEffect } from "react"

import { useThree } from "@react-three/fiber"
import gsap from "gsap"

interface Props {
  started: boolean
}

export function CameraRig({ started }: Props) {
  const { camera } = useThree()

  useEffect(() => {
    if (!started) return

    camera.position.set(0, 1.3, 9)

    const timeline = gsap.timeline()

    timeline.to(camera.position, {
      z: 7,
      y: 1,
      duration: 4,
      ease: "power1.inOut",
    })

    timeline.to(camera.position, {
      z: 5.8,
      x: 0.3,
      y: 0.6,
      duration: 6,
      ease: "sine.inOut",
    })

    timeline.to(camera.position, {
      z: 4.7,
      x: -0.2,
      y: 0.35,
      duration: 7,
      ease: "sine.inOut",
    })

    timeline.to(camera.position, {
      z: 5.3,
      x: 0,
      y: 0.7,
      duration: 6,
      ease: "sine.inOut",
    })

    return () => {
      timeline.kill()
    }
  }, [started, camera])

  return null
}