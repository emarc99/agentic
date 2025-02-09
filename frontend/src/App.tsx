import type React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import FeaturedContent from "./components/FeaturedContent"
import JoinCommunity from "./components/JoinCommunity"
import Footer from "./components/Footer"
import AIChatbot from "./components/AIChatbot"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedContent />
        <JoinCommunity />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  )
}

export default App
