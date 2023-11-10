import { Button } from "@/components/ui/button"
import Image from "next/image"

export const revalidate = 0

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center mt-20">
      <h1 className="text-heading1-bold p-4 text-center from-indigo-700 via-indigo-400 to-indigo-200 bg-gradient-to-r bg-clip-text text-transparent">Discover, Connect, Learn: The Web's English Language Revolution.</h1>
      <div className="relative mt-2 w-1 h-24 rounded-full bg-indigo-700" />
      <Button className="mt-6 bg-indigo-600 hover:bg-indigo-700">
        {`Let's Explore`}
      </Button>
      <Image
        src="/assets/globe.png"
        alt="Globe icon"
        width={40}
        height={40}
        className="animate-spin-slow mt-6"
      />
    </main>
  )
}
