export interface SceneMessage {
  text: string
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  opacity?: number
}

export const messages: SceneMessage[] = [
  {
    text: "Que hoy te pase\nalgo bonito",
    position: [-2.7, 2.1, -2],
    rotation: [0, 0.15, -0.08],
    scale: 0.34,
    opacity: 0.8,
  },
  {
    text: "Un poco de luz\npara tu día",
    position: [2.9, 1.5, -3.5],
    rotation: [0, -0.2, 0.06],
    scale: 0.31,
    opacity: 0.7,
  },
  {
    text: "Un detalle sencillo",
    position: [3, -0.4, -2],
    rotation: [0, -0.25, 0.03],
    scale: 0.4,
    opacity: 0.8,
  },
  {
    text: "Que tengas\nun día bonito",
    position: [-2.6, -1.55, -3.5],
    rotation: [0, 0.15, -0.04],
    scale: 0.3,
    opacity: 0.6,
  },
  {
    text: "Lo sencillo\ntambién alegra",
    position: [2.6, -1.9, -4.8],
    rotation: [0, -0.18, 0.04],
    scale: 0.26,
    opacity: 0.5,
  },
  {
    text: "🌻",
    position: [5, 3.4, -6],
    scale: 0.55,
    opacity: 0.45,
  },
]
