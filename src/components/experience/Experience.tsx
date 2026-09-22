import { useRef, useState } from "react"

import bonitoAudio from "../../assets/bonito.mp3"
import { GoldenScene } from "../three/GoldenScene"
import { AudioPlayer } from "./AudioPlayer"
import { Header } from "./Header"
import { LetterButton } from "./LetterButton"
import { LetterModal } from "./LetterModal"
import { PhotoKeepsake } from "./PhotoKeepsake"
import { StartScreen } from "./StartScreen"

export function Experience() {
  const [started, setStarted] = useState(false)
  const [letterOpen, setLetterOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const startAudio = () => {
    if (!audioRef.current) return

    audioRef.current.currentTime = 0
    void audioRef.current.play().catch(() => setIsPlaying(false))
  }

  const togglePlayback = () => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
      void audioRef.current.play().catch(() => setIsPlaying(false))
    } else {
      audioRef.current.pause()
    }
  }

  const seekAudio = (time: number) => {
    if (!audioRef.current) return

    audioRef.current.currentTime = time
    setCurrentTime(time)
  }

  const toggleMute = () => {
    if (!audioRef.current) return

    audioRef.current.muted = !audioRef.current.muted
    setIsMuted(audioRef.current.muted)
  }

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-[#020201]">
      <audio
        ref={audioRef}
        src={bonitoAudio}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <GoldenScene started={started} />

      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,transparent_28%,transparent_68%,rgba(0,0,0,0.58)_100%)]" />
      <div className="grain pointer-events-none absolute inset-0 z-20 opacity-[0.045]" />

      <Header started={started} />

      {started && (
        <>
          <PhotoKeepsake />
          <AudioPlayer
            currentTime={currentTime}
            duration={duration}
            isMuted={isMuted}
            isPlaying={isPlaying}
            onSeek={seekAudio}
            onToggleMute={toggleMute}
            onTogglePlayback={togglePlayback}
          />
          <LetterButton
            onClick={() => setLetterOpen(true)}
          />
        </>
      )}

      {!started && (
        <StartScreen
          onAudioStart={startAudio}
          onStart={() => setStarted(true)}
        />
      )}

      <LetterModal
        open={letterOpen}
        onClose={() => setLetterOpen(false)}
      />
    </main>
  )
}
