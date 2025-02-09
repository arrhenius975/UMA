"use client"

import { useEffect, useRef } from "react"

export default function Soundwaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      ctx.moveTo(0, canvas.height / 2)
      for (let i = 0; i < canvas.width; i += 10) {
        ctx.lineTo(i, canvas.height / 2 + Math.sin(i / 20) * 20)
      }
      ctx.strokeStyle = "#64b6ac"
      ctx.stroke()
      requestAnimationFrame(drawWave)
    }

    drawWave()
  }, [])

  return (
    <section className="py-12 px-5 bg-navy-800 text-white">
      <h2 className="text-3xl font-bold mb-8">224 Soundwaves</h2>
      <canvas ref={canvasRef} className="w-full h-24" />
    </section>
  )
}

