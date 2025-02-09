"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const lyrics = [
  { image: "/Uma/uma4.jpg", text: "Dreams, Floating In The Echoes Of Time...." },
  {
    image: "/Uma/uma5.jpg",
    text: 'They Say, "If It\'s Meant To Be, It\'ll Happen!" But Your Presence Converts It Into "Sometimes, You Have To Make It Happen!"',
  },
  {
    image: "/Uma/uma3.jpg",
    text: "There May Not Be A Perfect Plan To Achieve Your Goals, But There Always Need To Be An Act Of Execution That Has To Be Perfect To Achieve Your Goals!",
  },
]

export default function EchoesSection() {
  const [visibleLyrics, setVisibleLyrics] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLyrics((prev) => (prev < lyrics.length - 1 ? prev + 1 : prev))
    }, 2500)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 px-5 bg-navy-900 text-white relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-8 animate-glow">Echoes of 224</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {lyrics.map((lyric, index) => (
          <div
            key={index}
            className={`w-64 transition-all duration-1000 ${
              index <= visibleLyrics ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Image
              src={lyric.image || "/placeholder.svg"}
              alt={`Uma ${index + 1}`}
              width={250}
              height={250}
              className="rounded-lg mx-auto mb-4"
            />
            <p className="text-lg animate-fadeIn">{lyric.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

