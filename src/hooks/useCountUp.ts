import { useEffect, useState } from 'react'

export function useCountUp(target: number, start: boolean, duration = 2000) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    let rafId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setValue(Math.floor(eased * target))

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [target, start, duration])

  return value
}
