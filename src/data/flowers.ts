export interface FlowerData {
    position: [number, number, number]
    rotation: [number, number, number]
    scale: number
  }
  
  export const flowers: FlowerData[] = [
    {
      position: [-4.2, 2.6, -1],
      rotation: [0, 0.1, -0.25],
      scale: 0.8,
    },
    {
      position: [3.9, 2.7, -2],
      rotation: [0, -0.1, 0.18],
      scale: 0.65,
    },
    {
      position: [-3.7, 0.5, -3],
      rotation: [0, 0.15, -0.15],
      scale: 0.55,
    },
    {
      position: [4.5, 0.2, -3.5],
      rotation: [0, -0.15, 0.2],
      scale: 0.75,
    },
    {
      position: [-4.5, -2, -2],
      rotation: [0, 0.2, -0.2],
      scale: 0.7,
    },
    {
      position: [4, -2.1, -1],
      rotation: [0, -0.1, 0.15],
      scale: 0.9,
    },
    {
      position: [0.2, 0.2, -5],
      rotation: [0, 0, 0],
      scale: 0.7,
    },
    {
      position: [-6, 1, -7],
      rotation: [0, 0.2, 0],
      scale: 1,
    },
    {
      position: [6, -1, -7],
      rotation: [0, -0.2, 0],
      scale: 1,
    },
  ]