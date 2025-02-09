import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-50 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 NeuraLecto. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-purple-300 hover:text-purple-100 mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-purple-300 hover:text-purple-100 mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

