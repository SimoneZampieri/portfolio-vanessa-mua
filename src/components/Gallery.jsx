import React from "react";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "/IMG_7041.JPG", alt: "Makeup Work 1" },
    { id: 2, src: "/IMG_7045.JPG", alt: "Makeup Work 2" },
    { id: 3, src: "/IMG_7050.JPG", alt: "Makeup Work 3" },
    { id: 4, src: "/IMG_7052.JPG", alt: "Makeup Work 4" },
    { id: 5, src: "/IMG_7053.JPG", alt: "Makeup Work 5" },
    { id: 6, src: "/IMG_7057.JPG", alt: "Makeup Work 6" },
    { id: 7, src: "/IMG_7059.JPG", alt: "Makeup Work 7" },
    { id: 8, src: "/IMG_7062.JPG", alt: "Makeup Work 8" },
    { id: 9, src: "/IMG_7065.JPG", alt: "Makeup Work 9" },
    { id: 10, src: "/IMG_7067.JPG", alt: "Makeup Work 10" },
    { id: 11, src: "/IMG_7068.JPG", alt: "Makeup Work 11" },
    { id: 12, src: "/IMG_7069.JPG", alt: "Makeup Work 12" },
    { id: 13, src: "/IMG_7073.JPG", alt: "Makeup Work 13" },
    { id: 14, src: "/IMG_7074.JPG", alt: "Makeup Work 14" },
  ];

  // Create four columns for the masonry layout
  const columns = [[], [], [], []];

  // Distribute images across columns
  galleryImages.forEach((image, index) => {
    columns[index % 4].push(image);
  });

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <h1 className="font-['Playfair_Display'] text-4xl font-bold text-gray-800 mb-8 text-center">
        My Work
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="grid gap-4">
            {column.map((image) => (
              <div key={image.id} className="relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 group-hover:brightness-90"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
