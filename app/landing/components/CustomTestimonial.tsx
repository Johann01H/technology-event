"use client"

import {testimonios} from "@/app/landing/data/testimonial.data"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

export function CustomTestimonial () {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonio = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonios.length)
  }

  const prevTestimonio = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0014] py-24">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute right-0 top-0 h-150 w-150 translate-x-1/3 -translate-y-1/3 rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-125 w-125 -translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/15 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[80px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Geometric shapes */}
        <div className="absolute right-20 top-32 h-16 w-16 rotate-45 border border-cyan-400/20" />
        <div className="absolute bottom-40 left-16 h-12 w-12 rotate-12 border border-fuchsia-400/20" />
        <div className="absolute right-1/4 top-1/4 h-8 w-8 rotate-45 bg-cyan-400/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Testimonios
          </span>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Lo que dicen{" "}
            <span className="bg-linear-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              nuestros asistentes
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Profesionales de toda la región comparten su experiencia en Innovación y Tecnología Palmira
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative mx-auto max-w-4xl">
          {/* Glow effect behind card */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-fuchsia-500/20 via-purple-500/20 to-cyan-500/20 blur-xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl md:p-12">
            {/* Quote icon */}
            <div className="absolute right-8 top-8 opacity-20">
              <Quote className="h-24 w-24 text-fuchsia-400" />
            </div>

            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-linear-to-r from-fuchsia-500 to-cyan-500 opacity-75 blur" />
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white/20 md:h-32 md:w-32">
                  <Image
                    src={testimonios[currentIndex].imagen}
                    alt={testimonios[currentIndex].nombre}
                    className="h-full w-full object-cover"
                    crossOrigin="anonymous"
                    width={200}
                    height={200}
                    priority={false}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <p className="mb-6 text-lg leading-relaxed text-gray-200 md:text-xl">
                  &ldquo;{testimonios[currentIndex].testimonio}&rdquo;
                </p>

                <div>
                  <h4 className="text-xl font-bold text-white">{testimonios[currentIndex].nombre}</h4>
                  <p className="text-fuchsia-300">{testimonios[currentIndex].cargo}</p>
                  <p className="text-sm text-gray-400">{testimonios[currentIndex].empresa}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-8">
              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${ index === currentIndex ? "w-8 bg-linear-to-r from-fuchsia-400 to-cyan-400"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Ver testimonio ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonio}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-fuchsia-400/50 hover:bg-fuchsia-500/20"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextTestimonio}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-cyan-400/50 hover:bg-cyan-500/20"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional testimonial cards preview */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonios
            .filter((_, index) => index !== currentIndex)
            .slice(0, 3)
            .map((testimonio) => (
              <button
                key={testimonio.id}
                onClick={() => setCurrentIndex(testimonios.findIndex((t) => t.id === testimonio.id))}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all hover:border-fuchsia-400/30 hover:bg-white/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src={testimonio.imagen}
                      alt={testimonio.nombre}
                      className="h-full w-full object-cover"
                      crossOrigin="anonymous"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">{testimonio.nombre}</h5>
                    <p className="text-sm text-gray-400">{testimonio.cargo}</p>
                  </div>
                </div>
                <p className="line-clamp-2 text-sm text-gray-400 transition-colors group-hover:text-gray-300">
                  &ldquo;{testimonio.testimonio}&rdquo;
                </p>
              </button>
            ))}
        </div>
      </div>
    </section>
  )
}
