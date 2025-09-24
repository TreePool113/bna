"use client"
import React from 'react'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from 'next/image'

export default function BannerSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    autoplay: true,
    duration: 2000,
    dragStart: () => {},
    dragEnd: () => {},
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <Image 
        src="/images/banner.jpg"
        priority
        alt="Banner"
        width={1200}
        height={400}
        style={{ objectFit: "fill", width: "100%", height: "100%" }}
        />
      </div>
      <div className="keen-slider__slide number-slide2"><Image 
        src="/images/DTC 1.jpg"
        priority
        alt="DTC Banner"
        width={1200}
        height={400}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        /></div>
      <div className="keen-slider__slide number-slide3">
        <Image 
        src="/images/DTC 2.jpg"
        priority
        alt="DTC Banner"
        width={1200}
        height={400}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}