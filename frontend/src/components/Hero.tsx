import type React from "react"

const Hero: React.FC = () => {
  const connectWallet = () => {
    // Placeholder for wallet connection logic
    console.log("Connecting wallet...")
  }

  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Discover & Own AI-Recommended Books as NFTs</h1>
        <p className="text-xl mb-8">
          Get book recommendations, own digital books as NFTs, and support your favorite titles through on-chain voting.
        </p>
        <button
          onClick={connectWallet}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Connect Wallet
        </button>
      </div>
    </section>
  )
}

export default Hero

