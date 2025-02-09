import Image from "next/image"

interface HiddenCircuitProps {
  onClose: () => void
}

export default function HiddenCircuit({ onClose }: HiddenCircuitProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
      <div className="bg-navy-900 p-8 rounded-lg relative max-w-2xl w-full">
        <button className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded" onClick={onClose}>
          Close
        </button>
        <h3 className="text-2xl font-bold mb-4">Welcome To The Hidden Circuit Symphony</h3>
        <Image src="/Uma/opurnota.png" alt="Opurnota" width={300} height={300} className="mx-auto mb-4 rounded-lg" />
        <audio controls className="w-full mb-4">
          <source src="/Raw/Opurnota.m4a" type="audio/mp4" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-lg italic">
          Some Circuits Are Meant To Be Discovered, And Some Symphonies Are Meant To Be Felt Rather Than Heard! This Is
          A Melody That Resonates Beyond Sound, Beyond Time, Beyond Space. Let The Echoes Of 224 Guide You Through It!
        </p>
      </div>
    </div>
  )
}

