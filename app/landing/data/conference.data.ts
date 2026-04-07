

interface Props {
    id: number,
    descripcion: string
    tipo: "video" | "imagen",
    categoria: "conferencias" ,
    thumbnail?: string
    src: string,
}

export const galeria:Props[] = [
  {
    id: 1,
    tipo: "imagen",
    categoria: "conferencias",
    src: "/images/conferencia-1.jpeg",
    descripcion: "Más de 100 asistentes en la apertura del evento"
  },
  {
    id: 2,
    tipo: "imagen",
    categoria: "conferencias",
    src: "/images/conferencia-2.jpeg",
    descripcion: "Sesión práctica con expertos en inteligencia artificial"
  },
  {
    id: 3,
    tipo: "video",
    categoria: "conferencias",
    src: "/videos/conferencia-ignacio.mp4",
    descripcion: "Conexiones que transforman carreras",
    thumbnail: "/images/ignacio-conferencia.png"
  },
  
  {
    id: 5,
    tipo: "imagen",
    categoria: "conferencias",
    src: "/images/conferencias-6.jpeg",
    descripcion: "Equipos trabajando en soluciones innovadoras"
  },
  {
    id: 6,
    tipo: "imagen",
    categoria: "conferencias",
    src: "/images/conferencias-5.jpeg",
    descripcion: "Momentos de conexión entre sesiones"
  },
  {
    id: 7,
    tipo: "imagen",
    categoria: "conferencias",
    src: "/images/conferencia-4.jpeg",
    descripcion: "Debate sobre normatividad digital"
  },
  {
    id: 8,
    tipo: "video",
    categoria: "conferencias",
    src: "/videos/dudas.mp4",
    descripcion: "Maratón de desarrollo e innovación",
    thumbnail: "/images/dudas.png"
  },
  {
    id: 9,
    tipo: "video",
    categoria: "conferencias",
    src: "/videos/coomeva-entrevistas.mp4",
    thumbnail: "/images/datasys-coomeva.png",
    descripcion: "Celebración del cierre del evento"
  },
  {
    id: 10,
    tipo: "video",
    categoria: "conferencias",
    src: "/videos/FINAL-EDICION.mp4",
    thumbnail: "/images/legalidad-tecnologia.png",
    descripcion: "Celebración del cierre del evento"
  }
]