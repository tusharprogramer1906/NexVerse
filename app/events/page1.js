"use client";
import { db } from "@/configs";
import { events } from "@/configs/schema";
import { desc } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LoaderCircle } from "lucide-react";

// Custom arrow components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] right-0 sm:right-36 transform -translate-y-1/2 text-secondary cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] left-0 sm:left-36 transform -translate-y-1/2 text-secondary cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}

function Events() {
  const [eventList, seteventList] = useState();
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    getEventList();
  }, []);

  const getEventList = async () => {
    try {
      const result = await db.select().from(events).orderBy(desc(events.id));
      seteventList(result);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoaderCircle className="text-primary animate-spin" size={100}/>
      </div>
    );
  }

  return (
    <div>
      {eventList?.map((item, index) => (
        <div key={index} className="my-20">
          <div className="flex flex-col justify-center items-center ">
            <p className="px-10 sm:px-20 py-3 font-bold text-white whitespace-nowrap text-4xl sm:text-5xl text-center border-b-4 border-secondary">
              {item.eventName}
            </p>
          </div>
          <div className="relative">
            <Slider {...settings}>
              {item.images.map((image, i) => (
                <div key={i} className="text-white mt-0">
                  <img
                    src={`/uploads/${image}`} // Update this path based on your file structure
                    alt={`Event ${index + 1} - Image ${i + 1}`}
                    className="w-[500px] sm:w-[800px] h-[300px] sm:h-[500px] object-cover p-10 mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="shadow-[0px_0px_20px_0px_#3182ce] rounded-2xl w-[90%] sm:w-[70%] mx-auto sm:mt-5 mt-0">
            <p className="p-4 sm:p-8 font-light text-white text-md sm:text-2xl text-center">
              {item.eventDesc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
