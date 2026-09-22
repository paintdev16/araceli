import araImage from "../../assets/ara.png"

const photos = ["one", "two", "three", "four"] as const

export function PhotoKeepsake() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      {photos.map((photo) => (
        <div
          className={`photo-keepsake photo-keepsake--${photo}`}
          key={photo}
        >
          <div className="photo-keepsake__frame h-full w-full overflow-hidden rounded-[1.15rem] p-1">
            <div className="relative h-full w-full overflow-hidden rounded-[0.9rem] bg-[#171106]">
              <img
                src={araImage}
                alt=""
                className="photo-keepsake__image absolute max-w-none"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2a1707]/20 via-transparent to-[#ffe58b]/10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
