import { RiLineChartLine, RiLinkM, RiQrCodeLine } from "react-icons/ri"
import { AboutCard } from "../ui/aboutCard"
import AnimatedSection from "../ui/animetedSection"

export const About = () => {

  return (
    <AnimatedSection>
      <div className="container-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        <AboutCard icon={<RiLinkM />} title={"Links de WhatsApp"} text={"Crie links com diversos numeros de WhatsApp sendo randomizados."} />
        <AboutCard icon={<RiLineChartLine />} title={"Metricas"} text={"Tenha acesso a numeros detalhados de quantos usuarios acessaram seu redirecionar."} />
        <AboutCard icon={<RiLineChartLine />} title={"Metricas"} text={"Tenha acesso a numeros detalhados de quantos usuarios acessaram seu redirecionar."} />
        <AboutCard icon={<RiLineChartLine />} title={"Metricas"} text={"Tenha acesso a numeros detalhados de quantos usuarios acessaram seu redirecionar."} />
        <AboutCard icon={<RiQrCodeLine />} title={"QR Code"} text={"Crie QR Codes para seus links. Compartilhe seus links de forma offline e aumente a taxa de conversão."} />
        <AboutCard icon={<RiLineChartLine />} title={"Metricas"} text={"Tenha acesso a numeros detalhados de quantos usuarios acessaram seu redirecionar."} />

      </div>
    </AnimatedSection>
  )
}