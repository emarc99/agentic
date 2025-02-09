"use client"

import type React from "react"
import { useState } from "react"
import { FaRobot, FaTimes } from "react-icons/fa"

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [input, setInput] = useState("")

  const toggleChatbot = () => setIsOpen(!isOpen)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      // Simulate AI response (replace with actual AI logic later)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "I'm sorry, I'm just a demo AI. I can't provide real recommendations yet.", isUser: false },
        ])
      }, 1000)
      setInput("")
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className="fixed bottom-4 right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
        >
          <FaRobot size={24} />
        </button>
      )}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">AI Book Recommender</h3>
            <button onClick={toggleChatbot} className="text-white hover:text-purple-200">
              <FaTimes />
            </button>
          </div>
          <div className="h-96 overflow-y-auto p-4 bg-gray-100">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.isUser ? "text-right" : "text-left"}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.isUser ? "bg-purple-600 text-white" : "bg-white"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for a book recommendation..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </form>
        </div>
      )}
    </>
  )
}

export default AIChatbot

