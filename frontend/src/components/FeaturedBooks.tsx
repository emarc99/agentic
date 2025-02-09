import type React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const FeaturedBooks: React.FC = () => {
  const books = [
    { id: 1, title: "The AI Revolution", author: "John Doe", image: "/placeholder.svg?height=300&width=200" },
    { id: 2, title: "Blockchain Basics", author: "Jane Smith", image: "/placeholder.svg?height=300&width=200" },
    { id: 3, title: "Crypto Economics", author: "Alice Johnson", image: "/placeholder.svg?height=300&width=200" },
    { id: 4, title: "The Future of DeFi", author: "Bob Williams", image: "/placeholder.svg?height=300&width=200" },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section id="featured-books" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Books</h2>
        <Slider {...settings}>
          {books.map((book) => (
            <div key={book.id} className="px-2">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-purple-300">{book.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default FeaturedBooks

