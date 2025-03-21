"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] right-0 transform -translate-y-1/2 text-secondary cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] left-0 transform -translate-y-1/2 text-secondary cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

const sampleEvents = [
  {
    eventName: "TechMinds",
    images: ["event.png", "event2.jpg", "event3.jpg"],
    modalImage: "techminds.jpg", 
    eventDesc: "TechMinds, an exhilarating hackathon co-organized by Geek Room and the Artificial Intelligence Experience Centre, IITM Janakpuri. This event filled with creativity and technology featured live project presentations, idea pitching sessions, and judging by an esteemed panel. Participants explored cutting-edge themes like Machine Learning, Blockchain, Cybersecurity, Med Tech, IoT, and more.",
  },
];

function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalImage, setModalImage] = useState("");

  const openModal = (desc, title, image) => {
    setModalContent(desc);
    setModalTitle(title);
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-wrap gap-10 lg:gap-20 md:gap-7 justify-center mt-20">
        {sampleEvents.map((item, index) => (
          <div key={index} className="shadow-[1px_1px_20px_0px_#3182ce] w-[350px] md:w-[340px] sm:w-[400px] h-[420px] bg-gray-800 rounded-lg p-4">
            <div className="text-center mb-2">
              <p className="font-bold text-white text-2xl border-b-2 border-secondary pb-2 mb-5">
                {item.eventName}
              </p>
            </div>
            <div className="relative">
              <Slider {...settings}>
                {item.images.map((image, i) => (
                  <div key={i} className="text-white">
                    <img
                      src={`/uploads/${image}`}
                      alt={`Event ${index + 1} - Image ${i + 1}`}
                      className="w-full h-[250px] object-cover rounded-[98%_0%_98%_0%_/_42%_63%_37%_58%_]"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-md w-[150px] transition-transform transform hover:scale-105"
                onClick={() => openModal(item.eventDesc, item.eventName, item.modalImage)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}

        <AnimatePresence>
          {modalOpen && (
            <motion.div
              className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-800 shadow-[0px_1px_10px_0px_#3182ce] shadow-white flex flex-col 
            p-6 rounded-lg w-[90%] max-w-[450px] sm:w-[380px] md:w-[450px] lg:w-[500px] 
            max-h-[90vh] text-center overflow-auto"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p className="font-bold text-white text-2xl sm:text-lg border-b-2 border-orange-500 pb-2 mb-5">{modalTitle}</p>
                
                {modalImage && (
                  <img
                    src={`/uploads/${modalImage}`}
                    alt="Event"
                    className="lg:h-[200px] w-full h-[180px] sm:h-[120px] object-fit rounded-lg mb-3"
                  />
                )}

                <p className="text-white sm:text-sm text-justify">{modalContent}</p>
                <div className="flex justify-center">
                  <button
                    className="mt-4 bg-orange-500 w-20 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    );
}

export default Events;
