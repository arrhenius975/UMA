"use client"

import { useState } from "react"
import Image from "next/image"

const memories = [
  {
    id: "memory1",
    label: "Parallel Circuit Founded",
    image: "/Uma/uma3.jpg",
    text: "When We Started Parallel Circuit, I Never Knew It Would Become This Special! Uma, Your Passion & Vision Shaped This Band. This Moment Was The First Spark Of What Became A Dream Turned Reality!",
  },
  {
    id: "memory2",
    label: "First Lyrics Written",
    image: "/Uma/ardhangini.jpg",
    text: "I Still Remember When We Wrote Our First Lyrics Together! Every Line Was A Reflection Of Our Creative Bond, And Even Now, Our Words Remain The Foundation Of What We Create!",
  },
  {
    id: "memory3",
    label: "224 Parallel Circuit Established",
    image: "/Uma/logo 2-4.jpg",
    text: "224 Parallel Circuit - Today, Tomorrow, Forever This Wasn't Just A Name, It Was A Belief We Built Together! No Matter Where Life Takes Us, This Journey Will Always Be A Part Of Something Bigger!",
  },
]

export default function CircuitSection() {
  const [activeMemory, setActiveMemory] = useState<string | null>(null)

  return (
    <section className="py-12 px-5 bg-navy-900 text-white">
      <h2 className="text-3xl font-bold mb-8">The Circuit Connection</h2>
      <div className="flex justify-center gap-8 mb-8">
        {memories.map((memory) => (
          <span
            key={memory.id}
            className="relative w-16 h-16 bg-gradient-to-r from-sky-400 to-lavender-400 rounded-full cursor-pointer animate-glow hover:scale-125 transition-transform duration-300"
            onClick={() => setActiveMemory(activeMemory === memory.id ? null : memory.id)}
          >
            <span className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              {memory.label}
            </span>
            {activeMemory === memory.id && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-black bg-opacity-80 p-4 rounded-lg w-64">
                <Image
                  src={memory.image || "/placeholder.svg"}
                  alt={memory.label}
                  width={200}
                  height={200}
                  className="rounded-lg mx-auto mb-2"
                />
                <p className="text-sm">{memory.text}</p>
              </div>
            )}
          </span>
        ))}
      </div>
    </section>
  )
}

