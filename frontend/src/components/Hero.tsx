import { ConnectButton } from '@rainbow-me/rainbowkit';
import type React from "react"

const Hero: React.FC = () => {

  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Discover AI-Recommended Books, Comics, Manga & More as NFTs</h1>
        <p className="text-xl mb-8">
          Get personalized recommendations for books, literature, comics, and manga. Own digital copies as NFTs and
          support your favorite titles through on-chain voting.
        </p>
        <div className='flex justify-center'><ConnectButton /></div>
      </div>
    </section>
  )
}

export default Hero

