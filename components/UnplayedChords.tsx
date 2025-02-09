"use client"

import { useState } from "react"
import Image from "next/image"

const audioFiles = [
  { id: "audio1", image: "/Uma/Ardhangini2.jpg", src: "/Raw/Ardhangini.m4a", title: "What's Inside Me?" },
  { id: "audio2", image: "/Uma/KB.png", src: "/Raw/Khewale_Bekhewale.m4a", title: "What Am I?" },
]

const chords = [
  { id: "chord1", image: "/Uma/uma7.jpg", number: "2" },
  { id: "chord2", image: "/Uma/uma4.jpg", number: "2" },
  { id: "chord3", image: "/Uma/uma6.jpg", number: "4" },
]

export default function UnplayedChords() {
  const [flippedChord, setFlippedChord] = useState<string | null>(null)
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)

  const toggleAudio = (id: string) => {
    setPlayingAudio((current) => (current === id ? null : id))
  }

  return (
    <section className="py-20 px-10 bg-gradient-to-r from-white via-sky-200 to-lavender-200 rounded-3xl shadow-2xl mx-auto my-10 w-4/5 max-w-4xl">
      <h2 className="text-3xl font-bold text-navy-800 mb-8">A Moment of Doubt, A Moment of Clarity</h2>
      <div className="flex flex-col items-center gap-8 mb-8">
        {audioFiles.map((audio) => (
          <div key={audio.id} className="flex flex-col items-center">
            <Image
              src={audio.image || "/placeholder.svg"}
              alt={audio.title}
              width={300}
              height={300}
              className="rounded-full mb-4"
            />
            <button
              onClick={() => toggleAudio(audio.id)}
              className="bg-gradient-to-r from-teal-400 to-navy-800 text-white px-4 py-2 rounded-lg hover:from-navy-800 hover:to-teal-400 transition-all duration-300 transform hover:scale-110"
            >
              {playingAudio === audio.id ? "Pause" : audio.title}
            </button>
            <audio
              src={audio.src}
              onEnded={() => setPlayingAudio(null)}
              ref={(el) => {
                if (el) {
                  if (playingAudio === audio.id) {
                    el.play()
                  } else {
                    el.pause()
                    el.currentTime = 0
                  }
                }
              }}
            />
          </div>
        ))}
      </div>
      <p className="text-lg italic mb-8">
        Some Words Left Unsaid, But The Music Spoke For Itself! <br />
        Every Song We Worked On Together Had An Unspoken Story Behind It. <br />
        These Rhythms Remind Me Of The Moment I First Thought About Forming This Band.... <br />
        The Idea Felt Surreal, And I Never Imagined It Would Become Something Like A First Step Into Something Much Much
        Bigger Than Even I Can Imagine! And So, Brick By Brick This New World Had Started To Evolve With One Person
        Believing In It. <br />
        <br />
        That Was You, Uma!
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        {chords.map((chord) => (
          <div
            key={chord.id}
            className={`flip-card ${flippedChord === chord.id ? "flipped" : ""}`}
            onClick={() => setFlippedChord(chord.id === flippedChord ? null : chord.id)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front bg-gradient-to-r from-teal-400 to-navy-800 rounded-lg flex items-center justify-center text-white text-2xl font-bold w-40 h-40">
                {chord.number}
              </div>
              <div className="flip-card-back bg-gradient-to-r from-white to-lavender-200 rounded-lg w-40 h-40">
                <Image
                  src={chord.image || "/placeholder.svg"}
                  alt="Chord"
                  width={160}
                  height={160}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

