"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import Image from "next/image"

export function HeroSlider({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      loop={true}
      allowTouchMove={false}
      className="h-full w-full"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill={true}
            className="object-cover object-left"
            priority={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
