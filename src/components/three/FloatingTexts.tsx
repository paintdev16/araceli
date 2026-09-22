import { useRef } from "react"

import { Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

import { messages } from "../../data/messages"

interface Props {
  started: boolean
}

function FloatingText({
  text,
  position,
  rotation = [0, 0, 0],
  scale = 0.3,
  opacity = 0.7,
  index,
  started,
}: (typeof messages)[number] & {
  index: number
  started: boolean
}) {
  const ref = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!ref.current || !started) return

    ref.current.position.y =
      position[1] +
      Math.sin(
        clock.elapsedTime * 0.35 +
          index * 1.7,
      ) *
        0.08
  })

  return (
    <group
      ref={ref}
      position={position}
      rotation={rotation}
    >
      <Text
        fontSize={scale}
        color="#ffe36a"
        anchorX="center"
        anchorY="middle"
        textAlign="center"
        fillOpacity={started ? opacity : 0}
        outlineWidth={0.003}
        outlineColor="#c99200"
      >
        {text}
      </Text>
    </group>
  )
}

export function FloatingTexts({
  started,
}: Props) {
  return (
    <>
      {messages.map((message, index) => (
        <FloatingText
          key={`${message.text}-${index}`}
          {...message}
          index={index}
          started={started}
        />
      ))}
    </>
  )
}