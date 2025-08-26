"use client"; // Make sure this runs on the client

import { useState, useEffect } from "react";
import Modal from "react-modal";

const photos = [
  { src: "./image1.jpg", alt: "Mandir 1" },
  { src: "./image2.jpg", alt: "Mandir 2" },
  { src: "./slide1.png", alt: "Mandir 3" },
  { src: "./slide1.png", alt: "Mandir 4" },
  { src: "./slide1.png", alt: "Mandir 5" },
  { src: "./slide1.png", alt: "Mandir 6" },
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only set app element on client
    if (typeof window !== "undefined") {
      Modal.setAppElement("body"); // safer in App Router
      setMounted(true);
    }
  }, []);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  if (!mounted) return null; // Wait until mounted

  return (
    <section className="py-12 bg-orange-50" id="gallery">
        <div className="container mx-auto max-w-[1370px]">
            <div className="text-center mb-12 lg:max-w-[65%] md:max-w-[65%] max-w-full mx-auto" data-aos="zoom-in">
                <h2 className="text-3xl font-bold text-orange-800">मंदिर की तस्वीरें / पर्व-त्योहार की झलकियाँ </h2>
                <p className="mt-2 text-orange-600">
                    श्री छप्पनजी महाराज मंदिर की दिव्यता और भव्यता को दर्शाती हमारी फोटो गैलरी। यहाँ आपको मंदिर की खूबसूरत झलकियाँ, धार्मिक समारोह, पूजा-अर्चना और पर्व-त्योहारों की मनोहारी तस्वीरें देखने को मिलेंगी। प्रत्येक तस्वीर में मंदिर की शांतिपूर्ण और आध्यात्मिक माहौल का अनुभव किया जा सकता है।
                </p>
            </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="cursor-pointer">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"  data-aos="zoom-in"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Image Lightbox"
            className="flex items-center justify-center h-full p-4 bg-black bg-opacity-80 outline-none"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
            <div className="relative max-w-3xl w-full">
            <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
                &times;
            </button>
            <img
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt}
                className="w-full h-auto rounded-lg"
            />
            </div>
        </Modal>
      </div>
    </section>
  );
}
