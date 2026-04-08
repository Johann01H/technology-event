"use client"

import Image from "next/image"
import { speakersItems } from "../data/spekears.data"



export function CustomSpeakers() {
  return (
    <section className="relative min-h-screen  bg-slate-950 py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Geometric Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/30 rotate-45" />
      <div className="absolute bottom-40 left-16 w-24 h-24 border border-fuchsia-500/30 rotate-12" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-fuchsia-500/20 to-cyan-500/20 border border-fuchsia-500/30 text-cyan-400 text-sm font-medium mb-6">
            Expertos de Clase Mundial
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-cyan-400">
              Speakers
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Conoce a los líderes que están transformando el panorama tecnológico y legal de la región
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakersItems.map((speaker, index) => (
            <div
              key={speaker.name}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-fuchsia-500/50 hover:shadow-2xl hover:shadow-fuchsia-500/10">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-linear-to-b from-fuchsia-500/0 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image Container */}
                <div className="relative h-100 overflow-hidden">
                  <Image
                    src={speaker.speakerImage}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  
                  {/* Topic Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full">
                    <span className="text-cyan-400 text-xs font-medium">{speaker.topic}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-fuchsia-400 group-hover:to-cyan-400 transition-all duration-300">
                    {speaker.name}
                  </h3>
                  <p className="text-slate-500 text-sm">{speaker.company}</p>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-fuchsia-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Number Badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-linear-to-br from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-fuchsia-500/30">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
