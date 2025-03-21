"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "./timeline.css";
import Link from "next/link";

// Dynamically import TimelineObserver
const TimelineObserver = dynamic(() => import("react-timeline-animation"), {
  ssr: false,
});

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  //const [message3, setMessage3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  //const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  // const circle3 = useRef(null);

  const someCallback = () => {
    setMessage1("Techno Sapiens");
    callback();
  };

   const someCallback2 = () => {
     setMessage2("Event two");
   };

  // const someCallback3 = () => {
  //   setMessage3("Event three");
  // };

  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      setObserver(timeline1.current);
      setObserver(timeline2.current);
      //setObserver(timeline3.current);
      setObserver(circle1.current, someCallback);
      setObserver(circle2.current, someCallback2);
      //setObserver(circle3.current, someCallback3);
    }
  }, []);

  return (
    <div className="wrapper">
      <div
        id="timeline1"
        ref={timeline1}
        className="h-[150px] sm:h-[170px] w-[5px] bg-[#e5e5e5] rounded-t-[20px]"
      />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle font-bold">
          1
        </div>
        <Link href={"/events"}>
          <div className="absolute sm:left-[90px] left-[60px] font-semibold sm:whitespace-nowrap text-white -bottom-7 p-5 text-3xl sm:text-6xl rounded-2xl shadow-[0px_0px_400px_0px_#3182ce] hover:bg-[#2172a5] hover:shadow-[0px_0px_0px_0px_#3182ce] hover:cursor-pointer transition-all">
            {message1}
          </div>
        </Link>
      </div>
      <div
        id="timeline2"
        ref={timeline2}
        className="h-[150px] sm:h-[200px] w-[5px] bg-[#e5e5e5]"
      />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle font-bold">
          2
        </div>
        <div className="absolute sm:right-[90px] right-[60px] font-semibold sm:whitespace-nowrap text-white -bottom-7 p-5 text-3xl sm:text-6xl rounded-2xl shadow-[0px_0px_400px_0px_#3182ce] hover:bg-[#2172a5] hover:shadow-[0px_0px_0px_0px_#3182ce] hover:cursor-pointer transition-all">
          {message2}
        </div>
      </div>
      {/* <div
        id="timeline3"
        ref={timeline3}
        className="h-[150px] sm:h-[200px] w-[5px] bg-[#e5e5e5]"
      /> }
      { <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle font-bold">
          3
        </div>
        <div className="absolute sm:left-[90px] left-[60px] font-semibold sm:whitespace-nowrap text-white -bottom-7 p-5 text-3xl sm:text-6xl rounded-2xl shadow-[0px_0px_400px_0px_#3182ce] hover:bg-[#2172a5] hover:shadow-[0px_0px_0px_0px_#3182ce] hover:cursor-pointer transition-all">
          {message3}
        </div>
      </div> */}
    </div>
  );
};

export default function Timeliner() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="App flex flex-col justify-center items-center">
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#3098d9"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <Link href={"/events"}>
        <div className=" text-white font-bold sm:text-3xl text-2xl flex flex-col justify-center items-center mt-24 ">
          <div className="rounded-full bg-gradient-to-r from-secondary via-orange-300 to-primary p-1">
            <div className="rounded-full bg-black py-5 px-10">See Event Details</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
