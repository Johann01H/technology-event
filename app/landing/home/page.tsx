import { CustomInscriptions,CustomLiveYourLife,CustomSpeakers,CustomBanner } from "../components";
import { CustomCarrousel } from "../components/CustomCarrousel";

export default function HomePage() {
  return (
  <div>
      <section 
          className="relative w-full p-5 scroll-mt-20 flex items-center" 
          id="banner" 
          style={{
              backgroundImage: "url(/images/banner-image.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              minHeight: "800px",
              backgroundPosition: "10% center" 
          }}
      >
        <div className="absolute inset-0 bg-black/20 md:bg-transparent z-0" />
          <div className="relative z-10 w-full">
              <CustomBanner />
          </div>
      </section>
        <section 
          id="vivetuvida" 
          className="scroll-mt-20 py-25 bg-[#F2F2F2]"
        >
          <CustomLiveYourLife
        />
        </section>
        <section 
              className="p-5 py-15 scroll-mt-20" id="speakers"   
              style={{
              backgroundImage: 'url("/images/section-speakears.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "400px"
          }}>
          <CustomSpeakers
            // Personalizado
        />
        </section>
        <section style={{
              backgroundImage: 'url("/images/carrousel-image.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "300px"
        }}>
          <CustomCarrousel
            // Personalizado
          
          />
        </section>
        <section 
          className="p-5 bg-[#F2F2F2] py-25 scroll-mt-20"
          id="inscribete"
        >
          <CustomInscriptions 
            // Personalizado
        />
        </section>
    </div>
  )
}
