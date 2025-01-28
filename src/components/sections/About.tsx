import { RiLineChartLine, RiLinkM, RiQrCodeLine } from "react-icons/ri"
import { AboutCard } from "../ui/aboutCard"
import AnimatedSection from "../ui/animetedSection"
import { Inbox, UserSearch } from "lucide-react"

export const About = () => {

  return (
    <AnimatedSection>
      <div className="container-grid grid md:grid-cols-2 lg:grid-cols-3 px-4 gap-8 mt-10" id="about">
        <AboutCard icon={<RiLinkM />} title={"Links de WhatsApp"} text={"Crie links personalizados com diversos números de WhatsApp sendo randomizados."} />
        <AboutCard icon={<RiLineChartLine />} title={"Crie, edite e organize"} text={"Gerencie seus links, adicionando numeros, desativando e removendo."} />
        <AboutCard icon={<Inbox />} title={"Organize seus links por projetos"} text={"Organize e otimize a criação dos seus links por projetos."} />
        <AboutCard icon={<UserSearch />} title={"Use UTMs"} text={"Aplique UTMs em seus links e entenda melhor seus resultados."} />
        <AboutCard icon={<RiQrCodeLine />} title={"QR Code"} text={"Crie QR Codes para seus links. Compartilhe seus links de forma offline e aumente a taxa de conversão."} />
        <AboutCard icon={<RiLineChartLine />} title={"Metricas"} text={"Tenha acesso a números detalhados de quantos usuarios acessaram seu redirecionar."} />
      </div>
    </AnimatedSection>
  )
}