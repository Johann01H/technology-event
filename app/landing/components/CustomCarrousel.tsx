"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { imageList } from "@/app/landing/data/image.data"
import Image from "next/image"
import React from "react"
import Autoplay from "embla-carousel-autoplay"

export const CustomCarrousel = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full pb-10 "
      >
        <CarouselContent >
          {imageList.map((img, key) => (
            <CarouselItem key={key} className="pl-0 basis-1/4">
              <div className="relative w-full h-28 md:h-36 mt-14">
                <Image
                  src={img.image}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}