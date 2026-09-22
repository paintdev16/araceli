import { useRef } from "react"

import {
  Billboard,
  useTexture,
} from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

import sunflowerImage from "../../assets/sunflower.png"
import { flowers } from "../../data/flowers"
// import { flowers } from "../../data/flowers"

interface Props {
  started: boolean
}

interface FlowerProps {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  index: number
  started: boolean
}

function Flower({
  position,
  scale,
  index,
  started,
}: FlowerProps) {
  const texture = useTexture(sunflowerImage)

  const ref = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!ref.current || !started) return

    ref.current.position.y =
      position[1] +
      Math.sin(
        clock.elapsedTime * 0.5 +
          index * 1.3,
      ) *
        0.08

    ref.current.rotation.z =
      Math.sin(
        clock.elapsedTime * 0.35 +
          index,
      ) * 0.035
  })

  return (
    <group ref={ref} position={position}>
      <Billboard>
        <mesh scale={scale}>
          <planeGeometry args={[1.5, 1.5]} />

          <meshBasicMaterial
            map={texture}
            transparent
            alphaTest={0.05}
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>
      </Billboard>
    </group>
  )
}

export function Sunflowers({
  started,
}: Props) {
  return (
    <>
      {flowers.map((flower, index) => (
        <Flower
          key={index}
          {...flower}
          index={index}
          started={started}
        />
      ))}
    </>
  )
}