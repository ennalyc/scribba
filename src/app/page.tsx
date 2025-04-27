import Image from "next/image"
import Dreamer from '@/432.Dreamer.png'

export default function Home() {
  return (
    <div className="w-full">
        <div className="mt-16 flex flex-col justify-center items-center overflow-hidden">
          <h1 className="text-6xl text-center">Welcome to <br /><strong>Scribba!</strong></h1>
          <p className="mt-4 w-1/2 text-center">Your personal language-learning companion! Dive into texts, videos, and audios, and transform every click into a step toward fluency. 🌟</p>
          <Image src={Dreamer} alt="image of a girl sitting on top of Earth"  className="h-80 w-80"/>
        </div>
    </div>
  );
}
