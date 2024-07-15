// src/components/ReviewsCarousel.tsx
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review:
      "This is an amazing product! Highly recommend to everyone. The customer service was excellent and the product quality is top-notch.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "Absolutely love it. Great quality and fantastic support! I have already recommended this to my friends and family.",
    rating: 5,
  },
  {
    id: 3,
    name: "Alice Johnson",
    review:
      "It exceeded my expectations. Will buy again! The attention to detail and craftsmanship is evident in every aspect.",
    rating: 5,
  },
  {
    id: 4,
    name: "Robert Brown",
    review:
      "A truly outstanding experience from start to finish. The product arrived on time and in perfect condition. Highly recommend!",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Davis",
    review:
      "Fantastic product! The quality is unmatched and the customer service team was very helpful and responsive.",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael Wilson",
    review:
      "I am extremely satisfied with my purchase. The product is exactly as described and works perfectly. Five stars!",
    rating: 5,
  },
  {
    id: 7,
    name: "Sarah Taylor",
    review:
      "Highly recommend this product. Great value for the money and the quality is exceptional. Will definitely buy again.",
    rating: 5,
  },
];

const ReviewsCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-4">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="p-4 flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full flex flex-col justify-center items-center h-72">
              <p className="text-xl font-semibold mb-2 text-center text-gray-800">
                {review.name}
              </p>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-base text-center text-gray-600">
                "{review.review}"
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsCarousel;
