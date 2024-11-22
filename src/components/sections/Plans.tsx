import { RiCheckboxCircleLine, RiCloseCircleLine, RiStarLine } from "react-icons/ri"
import { NeonGradientCard } from "../ui/neon-gradient-card"
import { Button } from "../ui/button"

export const Plans = () => {
  return (
    <section className="dark:text-white">
      <div className="py-20">
        <div className="container-grid text-center ">
          <h2 className="text-4xl font-semibold mb-4">Conheça nossos planos de assinatura</h2>
          <p className="mb-24 text-sm font-medium dark:text-zinc-200">Nossos planos são flexíveis e projetados para oferecer o melhor custo-benefício, adaptando-se ao que você precisa.</p>

          <section className="flex flex-col items-center md:flex-row md:justify-between ">

            <div className="bg-white dark:bg-primaryColor text-black/90 dark:text-white/90 p-5 py-10 rounded-lg text-left w-[30%] z-20">
              <h3 className="font-semibold text-xl text-zinc-800 dark:text-zinc-400">Essecial</h3>
              <p className="text-4xl font-bold mb-8">R$00,00</p>
              <Button className="mb-10 w-full h-12">Assinar Agora</Button>

              <ul className="flex flex-col ">
                <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} />Links ilimitados</li>
                <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} /> sem limite de numeros</li>
                <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} className="" /> url personalizavel</li>
                <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3 text-zinc-200"><RiCloseCircleLine size={'22px'} /> url não presonalizaveis</li>
                <li className="flex items-center gap-2 dark:border-white/70 py-3 text-zinc-200"><RiCloseCircleLine size={'22px'} /> sem metricas de trafego</li>
              </ul>
            </div>

            <NeonGradientCard className="w-[30%] h-[540px]">
              <div className="text-black/90 dark:text-white/90 text-left">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-800 text-white text-xs font-semibold rounded-lg px-4 py-1 flex items-center gap-2 z-10"><RiStarLine />RECOMENDADO</div>

                <h3 className="font-semibold text-xl text-zinc-800 dark:text-zinc-400">Essecial</h3>
                <p className="text-4xl font-bold mb-8">R$33,30<span className="text-base font-medium dark:text-zinc-400"> /mês</span></p>
                <Button className="mb-10 w-full h-12">Assinar Agora</Button>

                <ul className="flex flex-col">
                  <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} /> Até 20 links</li>
                  <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} /> Sem limite de numeros</li>
                  <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} />Url personalizavel</li>
                  <li className="flex items-center gap-2 border-b border-black/20 dark:border-white/70 py-3"><RiCheckboxCircleLine size={'22px'} />Metricas de trafego</li>
                  <li className="flex items-center gap-2 dark:border-white/70 py-3 text-zinc-200"><RiCloseCircleLine size={'22px'} /> rl não presonalizaveis</li>
                </ul>
              </div>
            </NeonGradientCard>

            <div className="bg-white dark:bg-primaryColor text-black/90 dark:text-white/90 p-4 py-10 rounded-lg text-left w-[30%] z-20">

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

        </div>
      </div>
    </section>
  )
}