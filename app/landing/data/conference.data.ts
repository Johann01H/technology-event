

interface Props {
    id: number,
    descripcion: string
    tipo: "video" | "imagen",
    categoria: string ,
    thumbnail?: string
    src: string,
}

export const galeria:Props[] = [
  {
    id: 1,
    tipo: "imagen",
    categoria: "Conferencia | Cali, Palmira",
    src: "/images/conferencia-1.jpeg",
    descripcion: "11/09/2025 | Cámara De Comercio"
  },
  {
    id: 2,
    tipo: "imagen",
    categoria: "Conferencia | Cali, Palmira",
    src: "/images/conferencia-2.jpeg",
    descripcion: "11/09/2025 | Cámara De Comercio"
  },
  {
    id: 3,
    tipo: "video",
    categoria: "Conferencia | Cali, Palmira",
    src: "/videos/conferencia-ignacio.mp4",
    descripcion: "11/09/2025 | Cámara De Comercio",
    thumbnail: "/images/ignacio-conferencia.png"
  },
  
  {
    id: 5,
    tipo: "imagen",
    categoria: "Conferencia | Cali, Palmira",
    src: "/images/conferencias-6.jpeg",
    descripcion: "11/09/2025 | Cámara De Comercio"
  },
  {
    id: 6,
    tipo: "imagen",
    categoria: "Conferencia | Cali, Palmira",
    src: "/images/conferencias-5.jpeg",
    descripcion: "30/10/2025 | Palma Real Coomeva"
  },
  {
    id: 7,
    tipo: "imagen",
    categoria: "Conferencia | Cali, Palmira ",
    src: "/images/conferencia-4.jpeg",
    descripcion: "11/09/2025 | Cámara De Comercio"
  },
  {
    id: 8,
    tipo: "video",
    categoria: "Conferencia | Cali, Palmira",
    src: "/videos/dudas.mp4",
    descripcion: "11/09/2025 | Cámara De Comercio",
    thumbnail: "/images/dudas.png"
  },
  {
    id: 9,
    tipo: "video",
    categoria: "Conferencia | Cali, Palmira",
    src: "/videos/coomeva-entrevistas.mp4",
    thumbnail: "/images/datasys-coomeva.png",
    descripcion: "30/10/2025 | Palma Real Coomeva"
  },
  {
    id: 10,
    tipo: "video",
    categoria: "Conferencia | Cali, Palmira | Palma Real Coomeva",
    src: "/videos/FINAL-EDICION.mp4",
    thumbnail: "/images/legalidad-tecnologia.png",
    descripcion: "30/10/2025 | Palma Real Coomeva"
    
  }
]