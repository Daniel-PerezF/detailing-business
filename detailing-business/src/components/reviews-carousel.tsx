// src/components/ReviewsCarousel.tsx
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review:
      "I'm so impressed with the mobile detailing service! They did an excellent job cleaning my car. The attention to detail was remarkable, and my car looks brand new.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "Absolutely love the mobile detailing service! My car feels fresh and spotless inside out. They were professional and thorough. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Alice Johnson",
    review:
      "The mobile detailing service exceeded my expectations. They were punctual, meticulous, and my car has never looked better. Definitely worth it!",
    rating: 5,
  },
  {
    id: 4,
    name: "Robert Brown",
    review:
      "A truly outstanding experience with the mobile detailing service. They were friendly, efficient, and my car was gleaming by the end. I highly recommend their services!",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Davis",
    review:
      "Fantastic mobile detailing service! They went above and beyond to ensure my car was pristine. Their customer service was exceptional too. I'm very satisfied.",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael Wilson",
    review:
      "I am extremely happy with the mobile detailing. They transformed my car inside and out. Professional, courteous, and the results speak for themselves. Five stars!",
    rating: 5,
  },
  {
    id: 7,
    name: "Sarah Taylor",
    review:
      "Highly recommend this mobile detailing service. They provided great value for the money. My car looks fantastic, and I'll definitely be using their services again.",
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
          <div
            key={review.id}
            className="flex justify-center items-center px-2"
          >
            <div className="bg-gradient-to-tr from-[#D6D6D6] to-[#F2F2F2] rounded-lg px-2 py-6 w-full flex flex-col justify-center items-center h-56">
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
