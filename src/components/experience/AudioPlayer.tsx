import { Pause, Play, Volume2, VolumeX } from "lucide-react"

interface AudioPlayerProps {
  currentTime: number
  duration: number
  isMuted: boolean
  isPlaying: boolean
  onSeek: (time: number) => void
  onToggleMute: () => void
  onTogglePlayback: () => void
}

function formatTime(time: number) {
  if (!Number.isFinite(time)) return "0:00"

  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)

  return `${minutes}:${seconds.toString().padStart(2, "0")}`
}

export function AudioPlayer({
  currentTime,
  duration,
  isMuted,
  isPlaying,
  onSeek,
  onToggleMute,
  onTogglePlayback,
}: AudioPlayerProps) {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <section
      className="audio-player fixed bottom-[5.75rem] left-1/2 z-50 flex w-[min(21rem,calc(100vw-2rem))] items-center gap-3 rounded-[1.35rem] px-3 py-2.5"
      aria-label="Reproductor de música"
    >
      <button
        type="button"
        onClick={onTogglePlayback}
        className="audio-player__primary grid h-10 w-10 shrink-0 place-items-center rounded-full text-[#181304]"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play className="ml-0.5" size={16} fill="currentColor" />}
      </button>

      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className={`audio-equalizer ${isPlaying ? "is-playing" : ""}`} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="truncate text-xs font-medium tracking-[0.04em] text-[#fff8dc]">Bonito</span>
          </div>
          <span className="shrink-0 text-[0.65rem] tabular-nums text-[#fff8dc]/40">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={Math.min(currentTime, duration || 0)}
          onChange={(event) => onSeek(Number(event.target.value))}
          className="audio-progress block w-full"
          style={{
            background: `linear-gradient(to right, #f4c644 ${progress}%, rgba(255, 248, 220, 0.13) ${progress}%)`,
          }}
          aria-label="Progreso de la canción"
        />
      </div>

      <button
        type="button"
        onClick={onToggleMute}
        className="audio-player__mute grid h-9 w-9 shrink-0 place-items-center rounded-full text-[#fff8dc]/50 transition hover:bg-white/[0.06] hover:text-[#fff8dc]"
        aria-label={isMuted ? "Activar sonido" : "Silenciar música"}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
    </section>
  )
}
