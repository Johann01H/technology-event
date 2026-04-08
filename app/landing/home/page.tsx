import { CustomInscriptions,CustomSpeakers,CustomBanner } from "../components";
import { CustomCarrousel } from "../components/CustomCarrousel";
import { CustomPortafoli } from "../components/CustomPortafoli";
import { CustomTestimonial } from "../components/CustomTestimonial";

export default function HomePage() {

  // *? Remove the "hidden classes" to see sections.
  return (
  <div>
      <section 
          className="relative w-full p-5 scroll-mt-20 flex items-center" 
          id="banner" 
          style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.1)), url(/images/image-banner.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              minHeight: "1000px",
              backgroundPosition: "10% center" 
          }}
      >
        <div className="absolute inset-0 bg-black/20 md:bg-transparent z-0" />
          <div className="relative z-10 w-full">
              <CustomBanner />

          </div>
        </section>

        <section id="portafolio">
          <CustomPortafoli/>
        </section>
        <section 
            style={{
            backgroundImage: 'url("/images/fondo-carrusel.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "250px"
            }}
          >
            <CustomCarrousel />
        </section>
        <section 
              className=" scroll-mt-20" id="speakers"   
              style={{
              backgroundImage: 'url("/images/section-speakears.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "400px"
          }}>

          <CustomSpeakers />
        </section>
        <section 
          className="p-5 bg-[#F2F2F2] py-25 scroll-mt-20 hidden"
          id="inscribete"
        >
          <CustomInscriptions />

        </section>
        <section id="testimonios" className=" scroll-mt-20 ">
          <CustomTestimonial />

        </section>
    </div>
  )
}


