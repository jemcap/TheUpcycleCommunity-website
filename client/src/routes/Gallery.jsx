import React from "react";

const Gallery = () => {
  const galleryItems = [
    {
      image: "https://via.placeholder.com/400x300",
      title: "The Beauty of Nature",
      description: "Exploring stunning landscapes and serene environments.",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Urban Wonders",
      description: "Capturing the essence of city life and architecture.",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Wildlife Chronicles",
      description: "A glimpse into the vibrant world of wildlife.",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Cultural Moments",
      description:
        "Celebrating the diversity and beauty of cultures worldwide.",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Abstract Adventures",
      description: "Delving into the world of abstract art and photography.",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Lifestyle Stories",
      description: "Highlighting unique perspectives on everyday life.",
    },
  ];

  return (
    <section className="px-8 py-16 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Gallery</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Explore our collection of inspiring photos and stories.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <figure>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
