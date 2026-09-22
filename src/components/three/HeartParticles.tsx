import {
    useEffect,
    useMemo,
    useRef,
  } from "react"
  
  import { useFrame } from "@react-three/fiber"
  import gsap from "gsap"
  import * as THREE from "three"
  
  interface Props {
    started: boolean
  }
  
  const PARTICLES = 5500
  
  export function HeartParticles({
    started,
  }: Props) {
    const ref = useRef<THREE.Points>(null)
  
    const materialRef =
      useRef<THREE.PointsMaterial>(null)
  
    const positions = useMemo(() => {
      const array = new Float32Array(
        PARTICLES * 3,
      )
  
      for (let i = 0; i < PARTICLES; i++) {
        const t = Math.random() * Math.PI * 2
  
        const radius =
          Math.sqrt(Math.random()) * 0.115
  
        const hx =
          16 * Math.pow(Math.sin(t), 3)
  
        const hy =
          13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t)
  
        const i3 = i * 3
  
        array[i3] =
          hx * radius +
          (Math.random() - 0.5) * 0.12
  
        array[i3 + 1] =
          hy * radius +
          (Math.random() - 0.5) * 0.12
  
        array[i3 + 2] =
          (Math.random() - 0.5) * 0.7
      }
  
      return array
    }, [])
  
    useEffect(() => {
      if (!started) return
  
      if (!ref.current || !materialRef.current) {
        return
      }
  
      ref.current.scale.setScalar(0.01)
  
      materialRef.current.opacity = 0
  
      gsap.to(ref.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 4,
        delay: 5,
        ease: "power3.out",
      })
  
      gsap.to(materialRef.current, {
        opacity: 0.95,
        duration: 3,
        delay: 5,
        ease: "power2.out",
      })
    }, [started])
  
    useFrame(({ clock }) => {
      if (!started || !ref.current) return
  
      const t = clock.elapsedTime
  
      const pulse =
        1 + Math.sin(t * 1.7) * 0.018
  
      ref.current.scale.multiplyScalar(
        pulse /
          ref.current.scale.x,
      )
  
      ref.current.rotation.y =
        Math.sin(t * 0.25) * 0.06
    })
  
    return (
      <points
        ref={ref}
        position={[0, 0.1, -1.5]}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
  
        <pointsMaterial
          ref={materialRef}
          color="#ffd536"
          size={0.025}
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    )
  }