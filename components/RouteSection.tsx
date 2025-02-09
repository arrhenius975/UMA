"use client"

import { useState } from "react"
import HiddenCircuit from "./HiddenCircuit"

export default function RouteSection() {
  const [showHidden, setShowHidden] = useState(false)

  return (
    <section className="py-12 px-5 bg-black text-white">
      <h2
        className="inline-block text-2xl border-2 border-teal-400 py-4 px-8 cursor-pointer transition-colors duration-300 hover:bg-teal-400 hover:text-black"
        onClick={() => setShowHidden(true)}
      >
        Route To Hidden Circuit Symphony Where The Treasure Is Unparalleled!
      </h2>
      {showHidden && <HiddenCircuit onClose={() => setShowHidden(false)} />}
    </section>
  )
}

