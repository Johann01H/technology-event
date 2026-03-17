import { CustomInscriptions,CustomLiveYourLife,CustomSpeakers,CustomBanner } from "../components";

export default function HomePage() {
  return (
    <div>
        <section className="p-5 w-full" id="banner"
        >
          <CustomBanner
          
          
          />
        </section>
        <section id="vivetuvida">
          <CustomLiveYourLife
          
        />
        </section>
        <section 
              className="p-5 py-15" id="speakers"   
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
        <section className="p-5" id="inscribete">
          <CustomInscriptions 
          
        />
        </section>
    </div>
  )
}
