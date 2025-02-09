import type React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const FeaturedContent: React.FC = () => {
  const content = [
    {
      id: 1,
      title: "The AI Revolution",
      author: "John Doe",
      type: "Book",
      image: "/images/superman.jpg?height=300&width=200",
    },
    {
      id: 2,
      title: "Blockchain Heroes",
      author: "Jane Smith",
      type: "Comic",
      image: "/images/comics.jpeg?height=300&width=200",
    },
    {
      id: 3,
      title: "Crypto Economics",
      author: "Alice Johnson",
      type: "Book",
      image: "/images/crypto-eco.jpg?height=300&width=200",
    },
    {
      id: 4,
      title: "NFT Ninjas",
      author: "Bob Williams",
      type: "Manga",
      image: "/images/samurai-x.jpg?height=300&width=200",
    },
    {
      id: 5,
      title: "Decentralized Dreams",
      author: "Charlie Brown",
      type: "Literature",
      image: "/images/dreams.jpg?height=300&width=200",
    },
    {
      id: 6,
      title: "The Shounen Revolution",
      author: "Sensei",
      type: "Book",
      image: "/images/MangaTokyo.jpg?height=300&width=200",
    },
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
        <h2 className="text-4xl font-bold text-center mb-12">Featured Content</h2>
        <Slider {...settings}>
          {content.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-purple-300 mb-2">{item.author}</p>
                <span className="bg-purple-600 text-white text-sm py-1 px-2 rounded-full">{item.type}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default FeaturedContent

