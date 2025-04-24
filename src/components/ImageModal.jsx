import React from "react";
import { FaTimes } from "react-icons/fa";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-[90vh] aspect-square w-full">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
        >
          <FaTimes size={24} className="text-gray-800" />
        </button>
        <div className="w-full h-full rounded-lg overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
