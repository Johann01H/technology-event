import { CustomInscriptions,CustomLiveYourLife,CustomSpeakers,CustomBanner } from "../components";
import { CustomCarrousel } from "../components/CustomCarrousel";

export default function HomePage() {
  return (
    <div>
        <section 
          className="p-5 w-full scroll-mt-20" 
          id="banner" 
          style={{
              backgroundImage: "url(/images/banner-image.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "800px"
          }}
          
        >
          <CustomBanner
          
          
          />
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
        />
        </section>
        <section style={{
              backgroundImage: 'url("/images/carrousel-image.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "300px"
        }}>
          <CustomCarrousel/>
        </section>
        <section 
          className="p-5 bg-[#F2F2F2] py-25 scroll-mt-20"
          id="inscribete"
        >
          <CustomInscriptions 
          
        />
        </section>
    </div>
  )
}
