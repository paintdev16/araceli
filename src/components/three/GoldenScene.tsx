import { Canvas } from "@react-three/fiber"

import { CameraRig } from "./CameraRig"
import { Effects } from "./Effects"
import { FloatingParticles } from "./FloatingParticles"
import { FloatingTexts } from "./FloatingTexts"
import { GroundParticles } from "./GroundParticles"
import { HeartParticles } from "./HeartParticles"
import { Sunflowers } from "./Sunflowers"

interface Props {
  started: boolean
}

export function GoldenScene({ started }: Props) {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.7]}
        gl={{
          antialias: true,
          alpha: false,
        }}
        camera={{
          position: [0, 1.3, 9],
          fov: 55,
          near: 0.1,
          far: 100,
        }}
      >
        <color attach="background" args={["#000000"]} />

        <fog attach="fog" args={["#000000", 7, 22]} />

        <ambientLight intensity={0.15} />

        <pointLight
          position={[0, 2, 2]}
          color="#ffd83d"
          intensity={started ? 8 : 0}
          distance={12}
        />

        <CameraRig started={started} />

        <FloatingParticles
          count={3000}
          started={started}
        />

        <GroundParticles started={started} />

        <HeartParticles started={started} />

        <FloatingTexts started={started} />

        <Sunflowers started={started} />

        <Effects />
      </Canvas>
    </div>
  )
}