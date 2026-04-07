interface Props {
    id: number,
    nombre: string,
    cargo: string,
    imagen: string,
    testimonio: string
    empresa?: string
}

export const testimonios: Props[] = [
  {
    id: 1,
    nombre: "Jennifer Salazar",
    cargo: "Emprendedora",
    imagen: "/images/avatar-jennifer-emprendedora.png",
    testimonio:
      "El evento superó todas mis expectativas. Las conferencias sobre transformación digital fueron excepcionales y el networking con otros profesionales del sector abrió nuevas oportunidades de negocio.",
  },
  {
    id: 2,
    nombre: "Carlos Javier Muñoz",
    cargo: "Jefe de empresa",
    empresa: "Wayúu",
    imagen: "/images/avatar-javier-wayuu.png",
    testimonio: "Resultó sumamente valiosa la sección de marketing, especialmente por su aplicabilidad en nuestro emprendimiento de Mochilas Wayúu, donde buscamos fusionar tradición con estrategias de crecimiento digital.",
  },
  {
    id: 3,
    nombre: "Jose Francisco Giraldo",
    cargo: "Arquitecto",
    imagen: "/images/avatar-jose-arquitecto.png",
    testimonio:
      "Muy directos y puntuales es clave en el entorno laboral actual. Además, conocer la competencia y el sector comercial nos permite no solo ofrecer nuestros servicios, sino integrar soluciones de otros para crecer en conjunto.",
  },
  {
    id: 4,
    nombre: "Claudia Arce",
    cargo: "Directora de Tecnología",
    empresa: "Swarosky Store",
    imagen: "/images/avatar-claudia-store.png",
    testimonio:
      "Una experiencia transformadora. El enfoque en legalidad y normatividad digital es único en la región. Altamente recomendado para profesionales del sector tech.",
  },
]