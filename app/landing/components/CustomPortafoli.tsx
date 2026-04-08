"use client"


import { useState } from "react"
import Image from "next/image"
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { galeria } from "../data/conference.data"


export function CustomPortafoli() {
  const [categoriaActiva] = useState("todos")
  const [modalAbierto, setModalAbierto] = useState(false)
  const [itemActivo, setItemActivo] = useState<number | null>(null)

  const itemsFiltrados = categoriaActiva === "todos" ? galeria : galeria.filter(item => item.categoria === categoriaActiva)

  const abrirModal = (id: number) => {
    setItemActivo(id)
    setModalAbierto(true)
  }

  const cerrarModal = () => {
    setModalAbierto(false)
    setItemActivo(null)
  }

  const navegarModal = (direccion: "prev" | "next") => {
    if (itemActivo === null) return
    const indiceActual = itemsFiltrados.findIndex(item => item.id === itemActivo)
    const nuevoIndice = direccion === "next" 
      ? (indiceActual + 1) % itemsFiltrados.length
      : (indiceActual - 1 + itemsFiltrados.length) % itemsFiltrados.length
    setItemActivo(itemsFiltrados[nuevoIndice].id)
  }

  const itemModal = galeria.find(item => item.id === itemActivo)

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0014] py-24">
      
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-150 w-150 -translate-x-1/3 -translate-y-1/3 rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-125 w-125 translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/15 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-20 top-32 h-16 w-16 rotate-45 border border-cyan-400/20" />
        <div className="absolute bottom-40 right-16 h-12 w-12 rotate-12 border border-fuchsia-400/20" />
        <div className="absolute right-1/4 top-1/4 h-8 w-8 rotate-45 bg-cyan-400/10" />
        <div className="absolute bottom-1/3 left-1/4 h-6 w-6 rotate-12 bg-fuchsia-400/10" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2 text-sm font-medium text-fuchsia-300">
            Evidencias del Evento
          </span>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Galería de{" "}
            <span className="bg-linear-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Momentos Inolvidables
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400">
            Revive los mejores momentos de nuestras ediciones anteriores. 
            Conferencias, talleres y networking que transformaron carreras.
          </p>
      </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {itemsFiltrados.map((item) => (
            <div
              key={item.id}
              onClick={() => abrirModal(item.id)}
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-fuchsia-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-1 backdrop-blur-xl transition-all duration-500 group-hover:border-fuchsia-500/50">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={item.tipo === "video" && item.thumbnail ? item.thumbnail : item.src}
                    alt={item.descripcion}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0014] via-[#0a0014]/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                  {item.tipo === "video" && (
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-500/30 bg-fuchsia-600/90 backdrop-blur-sm">
                      <Play className="h-5 w-5 fill-white text-white" />
                    </div>
                  )}
                  <div className="absolute left-4 top-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium capitalize text-cyan-300 backdrop-blur-sm">
                    {item.categoria}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-300">
                    <p className="text-sm text-gray-400 opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100">
                      {item.descripcion}
                    </p>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                    <span className="font-mono text-xs text-cyan-300">VIEW</span>
                  </div>
                </div>
              </div>
        </div>
          ))}
        </div>
      </div>

      {modalAbierto && itemModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0014]/95 p-4 backdrop-blur-md"
          onClick={cerrarModal}
        >
          <button 
            onClick={cerrarModal}
            className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navegarModal("prev"); }}
            className="absolute left-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/20 md:left-8"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navegarModal("next"); }}
            className="absolute right-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/20 md:right-8"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-1 backdrop-blur-xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
              {itemModal.tipo === "video" ? (
                <video
                  src={itemModal.src}
                  className="h-full w-full object-contain"
                  controls
                  muted
                  autoPlay
                  playsInline
                />
              ) : (
                <>
                  <Image
                    src={itemModal.src}
                    alt={itemModal.descripcion}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                </>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#0a0014] via-[#0a0014]/90 to-transparent p-6">
                <span className="mb-3 inline-block rounded-full border border-fuchsia-500/30 bg-fuchsia-500/20 px-3 py-1 text-xs font-medium capitalize text-fuchsia-300">
                  {itemModal.categoria}
                </span>
                <p className="text-gray-400">{itemModal.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
