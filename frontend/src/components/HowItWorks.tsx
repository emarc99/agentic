import type React from "react"
import { FaSearch, FaShoppingCart, FaBook, FaVoteYea } from "react-icons/fa"

const HowItWorks: React.FC = () => {
  const steps = [
    { icon: <FaSearch />, text: "Get AI recommendations for books, comics, manga, and more." },
    { icon: <FaShoppingCart />, text: "Purchase your favorite titles using crypto." },
    { icon: <FaBook />, text: "Own them as NFTs & access exclusive digital content." },
    { icon: <FaVoteYea />, text: "Vote to boost rankings across various categories." },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-black bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4 text-purple-400">{step.icon}</div>
              <p className="text-lg">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

