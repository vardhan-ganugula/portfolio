import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const imgs = [
    "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    "https://thumbs.dreamstime.com/b/two-ladybugs-orange-spring-flower-flight-insect-artistic-macro-image-concept-spring-summer-two-ladybugs-orange-125140826.jpg",
    "https://cdn.pixabay.com/photo/2020/06/01/13/57/wasp-5246756_640.jpg",
  ];
  const btnControls = useRef(null);
  const sliderContiner = useRef(null);
  const sliderItemsRef = useRef(null);
  const direction = useRef(null);
  const handleClick = (e) => {
    const slider = sliderItemsRef.current;
    const sliderContainer = sliderContiner.current;
    const sliderItems = sliderItemsRef.current;

    if (!slider || !sliderContainer || !sliderItems) return;
    sliderItems.removeEventListener("transitionend", handleTransition);

    if (e.target.classList.contains("slide_right")) {
      if (direction.current === 1) {
        const slider = sliderItemsRef.current;
        const slide = slider.lastElementChild;
        slider.prepend(slide);
      }
      direction.current = -1;
      sliderContainer.style.alignItems = "flex-start";
      slider.style.transform = `translateX(-${sliderContainer.clientWidth}px)`;
    } else if (e.target.classList.contains("slide_left")) {
      if (direction.current === -1) {
        const slider = sliderItemsRef.current;
        slider.append(slider.firstElementChild);
        direction.current = 1;
      }
      sliderContainer.style.alignItems = "flex-end";
      slider.style.transform = `translateX(${sliderContainer.clientWidth}px)`;
    }
    slider.addEventListener("transitionend", handleTransition);
  };

  const handleTransition = (e) => {
    const slider = sliderItemsRef.current;
    if (!slider) return;
    if (direction.current == -1) {
      const slide = slider.firstElementChild;
      slider.append(slide);
    } else {
      const slide = slider.lastElementChild;
      slider.prepend(slide);
    }
    slider.style.transition = "none";
    slider.style.transform = "translateX(0)";
    setTimeout(() => {
      slider.style.transition = "all 0.5s ease";
    }, 0);
  };

  useEffect(() => {
    const sliderContainer = sliderContiner.current;
    const sliderItems = sliderItemsRef.current;
    const btnControlsRef = btnControls.current;
    if (!sliderContainer || !sliderItems || !btnControlsRef) return;
    btnControlsRef.addEventListener("click", handleClick);
    return () => {
      btnControlsRef.removeEventListener("click", handleClick);
      sliderItems.removeEventListener("transitionend", handleTransition);
    };
  });

  return (
    <>
      <div className="px-10 w-full h-full ">
        <section
          className="w-full h-full flex-col border-blue-500 flex items-start overflow-hidden"
          ref={sliderContiner}
        >
          <div
            className="w-full h-full border-green-500 flex transition-transform duration-500"
            style={{
              width: `${imgs.length * 100}%`,
            }}
            ref={sliderItemsRef}
          >
            {imgs.map((img_src, idx) => (
              <div
                key={idx}
                className="w-full text-white h-full border border-red-500 text-center"
              >
                <img
                  src={img_src}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </section>

        <div
          className="absolute w-full h-full left-0 top-0 flex justify-between px-2 text-white"
          ref={btnControls}
        >
          <button className="slide_left">
            <FaChevronLeft className="pointer-events-none" />
          </button>
          <button className="slide_right">
            <FaChevronRight className="pointer-events-none" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
