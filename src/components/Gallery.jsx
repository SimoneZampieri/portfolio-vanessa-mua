import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: "/A.JPG", alt: "Makeup Work 1" },
    { id: 2, src: "/B.JPG", alt: "Makeup Work 2" },
    { id: 3, src: "/C.JPG", alt: "Makeup Work 3" },
    { id: 4, src: "/D.JPG", alt: "Makeup Work 4" },
    { id: 5, src: "/schon.jpg", alt: "Makeup Work 5" },
    { id: 6, src: "/F.JPG", alt: "Makeup Work 6" },
    { id: 7, src: "/G.JPG", alt: "Makeup Work 7" },
    { id: 8, src: "/H.JPG", alt: "Makeup Work 8" },
    { id: 9, src: "/I.JPG", alt: "Makeup Work 9" },
    { id: 10, src: "/L.JPG", alt: "Makeup Work 10" },
    { id: 11, src: "/M.JPG", alt: "Makeup Work 11" },
    { id: 12, src: "/N.JPG", alt: "Makeup Work 12" },
    { id: 13, src: "/O.PNG", alt: "Makeup Work 13" },
    { id: 14, src: "/P.jpeg", alt: "Makeup Work 14" },
    { id: 15, src: "/Q.JPG", alt: "Makeup Work 15" },
    { id: 16, src: "/E.JPG", alt: "Makeup Work 16" },
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
                  className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
