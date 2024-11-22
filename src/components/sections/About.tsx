import { RiLineChartLine } from "react-icons/ri"
import { AboutCard } from "../ui/aboutCard"


export const About = () => {

  return (
    <section className="">
      <div className="container-grid grid grid-cols-3 gap-8 my-10">
        <AboutCard icon={<RiLineChartLine />} title={"Metricas"} text={"Tenha acesso a numeros detalhados de quantos usuarios acessaram seu redirecionar."} />
        <AboutCard icon={<RiLineChartLine />} title={"Metricas"} text={"Tenha acesso a numeros detalhados de quantos usuarios acessaram seu redirecionar."} />
        <AboutCard icon={<RiLineChartLine />} title={"Metricas"} text={"Tenha acesso a numeros detalhados de quantos usuarios acessaram seu redirecionar."} />
        <AboutCard icon={<RiLineChartLine />} title={"Metricas"} text={"Tenha acesso a numeros detalhados de quantos usuarios acessaram seu redirecionar."} />
        <AboutCard icon={<RiLineChartLine />} title={"Metricas"} text={"Tenha acesso a numeros detalhados de quantos usuarios acessaram seu redirecionar."} />
        <AboutCard icon={<RiLineChartLine />} title={"Metricas"} text={"Tenha acesso a numeros detalhados de quantos usuarios acessaram seu redirecionar."} />

      </div>
    </section>
  )
}