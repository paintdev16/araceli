import { useMemo, useRef } from "react"

import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface Props {
  count?: number
  started: boolean
}

export function FloatingParticles({
  count = 2500,
  started,
}: Props) {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      array[i3] =
        (Math.random() - 0.5) * 20

      array[i3 + 1] =
        (Math.random() - 0.5) * 12

      array[i3 + 2] =
        -Math.random() * 18 + 5
    }

    return array
  }, [count])

  useFrame((state, delta) => {
    if (!started || !pointsRef.current) return

    pointsRef.current.rotation.y += delta * 0.008

    pointsRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.15) *
      0.15
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#ffd84a"
        size={0.025}
        transparent
        opacity={started ? 0.7 : 0}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}