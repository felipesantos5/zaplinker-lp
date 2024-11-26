import { RiCheckboxCircleLine, RiCloseCircleLine, RiStarLine, RiWhatsappLine } from "react-icons/ri"
import { NeonGradientCard } from "../ui/neon-gradient-card"
import { Button } from "../ui/button"
import AnimatedSection from "../ui/animetedSection"

export const Plans = () => {
  return (
    <AnimatedSection className="dark:text-white">
      <div className="pt-24" id="planos">
        <div className="text-center mx-4 sm:mx-20 container-grid">
          <h2 className="text-5xl font-semibold mb-4">Conheça nossos planos de assinatura</h2>
          <p className="mb-24 text-muted-foreground tracking-tight">Nossos planos são flexíveis e projetados para oferecer o melhor custo-benefício, adaptando-se ao que você precisa.</p>

          <section className="flex flex-col gap-6 items-center lg:flex-row md:justify-between mb-6">

            <div className="bg-white dark:bg-primaryColor text-black/90 dark:text-white/90 p-5 py-10 rounded-lg text-left w-full lg:w-[30%] z-20 border border-zinc-300 dark:border-zinc-700 h-full">
              <h3 className="font-semibold text-xl text-zinc-800 dark:text-zinc-400">Essecial</h3>
              <p className="text-4xl font-bold mb-8">R$00,00</p>
              <Button className="mb-10 w-full h-12">Assinar Agora</Button>

              <ul className="flex flex-col">
                <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} />Links ilimitados</li>
                <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} /> sem limite de numeros</li>
                <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} className="" /> url personalizavel</li>
                <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3 text-zinc-300 dark:text-zinc-600"><RiCloseCircleLine size={'22px'} /> url não presonalizaveis</li>
                <li className="flex items-center gap-2 dark:border-white/70 py-3 text-zinc-300 dark:text-zinc-600"><RiCloseCircleLine size={'22px'} /> sem metricas de trafego</li>
              </ul>
            </div>

            <NeonGradientCard className="w-full lg:w-[30%] h-full">
              <div className="text-black/90 dark:text-white/90 text-left py-4">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-800 text-white text-xs font-semibold rounded-lg px-4 py-1 flex items-center gap-2 z-10"><RiStarLine />RECOMENDADO</div>

                <h3 className="font-semibold text-xl text-zinc-800 dark:text-zinc-400">Essecial</h3>
                <p className="text-4xl font-bold mb-8">R$33,30<span className="text-base font-medium dark:text-zinc-400"> /mês</span></p>
                <Button className="mb-10 w-full h-12">Assinar Agora</Button>

                <ul className="flex flex-col">
                  <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} /> Até 20 links</li>
                  <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} /> Sem limite de numeros</li>
                  <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} />Url personalizavel</li>
                  <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} />Metricas de trafego</li>
                  <li className="flex items-center gap-2 dark:border-white/70 py-3 text-zinc-300 dark:text-zinc-600"><RiCloseCircleLine size={'22px'} /> rl não presonalizaveis</li>
                </ul>
              </div>
            </NeonGradientCard>

            <div className="bg-white dark:bg-primaryColor text-black/90 dark:text-white/90 p-4 py-10 rounded-lg text-left w-full lg:w-[30%] z-20 border border-zinc-300 dark:border-zinc-700">

              <h3 className="font-semibold text-xl text-zinc-800 dark:text-zinc-400">Essecial</h3>
              <p className="text-4xl font-bold mb-8">R$99,90<span className="text-base font-medium dark:text-zinc-400"> /mês</span></p>
              <Button className="mb-10 w-full h-12">Assinar Agora</Button>

              <ul className="flex flex-col ">
                <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} />Links ilimitados</li>
                <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} /> sem limite de numeros</li>
                <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} className="" /> url personalizavel</li>
                <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} /> url não presonalizaveis</li>
                <li className="flex items-center gap-2 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} /> sem metricas de trafego</li>
              </ul>
            </div>

          </section>
          <div className="bg-white dark:bg-primaryColor text-black/90 dark:text-white/70 p-5 py-10 rounded-lg text-left w-full relative z-20 border border-zinc-300 dark:border-zinc-700 flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="text-4xl font-semibold text-center sm:text-left text-black dark:text-white">Ficou com alguma dúvida ?</h2>
              <p className="font-light text-muted-foreground tracking-tight">Se você tem alguma dúvida sobre como funciona nosso aplicativo de redirecionamento de URL personalizada do WhatsApp ou sobre nossos planos, estamos aqui para ajudar!</p>
            </div>
            <div className="w-1/3 m-auto">
              <Button className="w-full h-12"><RiWhatsappLine className="text-2xl w-20" size={'20px'} /> Whatsapp</Button>
            </div>

          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}