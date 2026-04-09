"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { imageList } from "@/app/landing/data/image.data"
import Image from "next/image"
import React from "react"
import Autoplay from "embla-carousel-autoplay"

export const CustomCarrousel = () => {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  return (
    <div className="w-full overflow-hidden">
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.reset()}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full py-10"
      >
        {/* Eliminamos posibles desplazamientos laterales */}
        <CarouselContent className="ml-0">
          {imageList.map((img, key) => (
            <CarouselItem
              key={key}
              className="lg:basis-1/3 sm:basis-full shrink-0 flex items-center justify-center"
            >
              <div className="relative w-full max-w-5xl h-40 sm:h-48 md:h-56 lg:h-64">
                <Image
                  src={img.image}
                  alt={img.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority={key === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}