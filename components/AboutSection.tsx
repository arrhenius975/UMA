import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="my-12 mx-auto max-w-2xl p-5 bg-white bg-opacity-90 rounded-lg shadow-lg transform perspective-1000 hover:rotate-y-5 transition-all duration-300">
      <h2 className="text-3xl font-bold text-navy-800 mb-4">Uma : The Architect Behind The Architecture</h2>
      <Image
        src="/Uma/uma2.jpg"
        alt="Uma"
        width={400}
        height={400}
        className="rounded-lg shadow-md hover:rotate-2 hover:scale-105 transition-transform duration-300"
      />
      <p className="mt-4 text-lg">
        A Journey Of Melodies, Lyrics, And Leadership From Day One, You've Shaped Parallel Circuit With Your Passion!
      </p>
    </section>
  )
}

