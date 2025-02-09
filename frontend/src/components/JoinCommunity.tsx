import type React from "react"
import { FaDiscord, FaTelegram } from "react-icons/fa"

const JoinCommunity: React.FC = () => {
  return (
    <section id="join-community" className="py-20 bg-black bg-opacity-30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
        <p className="text-xl mb-8">Connect with other book lovers and AI enthusiasts!</p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            <FaDiscord className="mr-2" /> Join Discord
          </a>
          <a
            href="#"
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            <FaTelegram className="mr-2" /> Join Telegram
          </a>
        </div>
      </div>
    </section>
  )
}

export default JoinCommunity

