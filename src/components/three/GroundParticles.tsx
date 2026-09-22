import { useMemo, useRef } from "react"

import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface Props {
  started: boolean
}

const WIDTH = 18
const DEPTH = 22
const STEP = 0.18

export function GroundParticles({
  started,
}: Props) {
  const ref = useRef<THREE.Points>(null)

  const { positions, basePositions } =
    useMemo(() => {
      const values: number[] = []

      for (
        let x = -WIDTH / 2;
        x <= WIDTH / 2;
        x += STEP
      ) {
        for (
          let z = -DEPTH / 2;
          z <= DEPTH / 2;
          z += STEP
        ) {
          values.push(
            x + (Math.random() - 0.5) * 0.06,
            -2.7,
            z - 4 +
              (Math.random() - 0.5) * 0.06,
          )
        }
      }

      const positions = new Float32Array(values)

      return {
        positions,
        basePositions: new Float32Array(
          positions,
        ),
      }
    }, [])

  useFrame(({ clock }) => {
    if (!started || !ref.current) return

    const geometry = ref.current.geometry

    const attribute =
      geometry.attributes.position as THREE.BufferAttribute

    const time = clock.elapsedTime

    for (
      let i = 0;
      i < attribute.count;
      i++
    ) {
      const i3 = i * 3

      const x = basePositions[i3]
      const z = basePositions[i3 + 2]

      const wave1 =
        Math.sin(x * 0.75 + time * 0.55) *
        0.12

      const wave2 =
        Math.cos(z * 0.55 + time * 0.35) *
        0.1

      const wave3 =
        Math.sin(
          (x + z) * 0.3 + time * 0.25,
        ) * 0.06

      attribute.array[i3 + 1] =
        -2.7 + wave1 + wave2 + wave3
    }

    attribute.needsUpdate = true
  })

  return (
    <points
      ref={ref}
      rotation={[-0.05, 0, 0]}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#ffc928"
        size={0.025}
        transparent
        opacity={started ? 0.75 : 0}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}