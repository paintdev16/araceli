import {
    Bloom,
    EffectComposer,
    Vignette,
  } from "@react-three/postprocessing"
  
  export function Effects() {
    return (
      <EffectComposer>
        <Bloom
          intensity={1.8}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.8}
          mipmapBlur
        />
  
        <Vignette
          eskil={false}
          offset={0.15}
          darkness={0.8}
        />
      </EffectComposer>
    )
  }