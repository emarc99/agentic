import type React from "react"
import { FaBook } from "react-icons/fa"

const Header: React.FC = () => {
  return (
    <header className="bg-transparent py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <FaBook className="text-3xl mr-2" />
          <span className="text-2xl font-bold">NeuraLecto</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#how-it-works" className="hover:text-purple-300">
                How It Works
              </a>
            </li>
            <li>
              <a href="#featured-books" className="hover:text-purple-300">
                Featured Books
              </a>
            </li>
            <li>
              <a href="#join-community" className="hover:text-purple-300">
                Community
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

