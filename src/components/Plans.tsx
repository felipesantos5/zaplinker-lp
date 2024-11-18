import { RiCheckboxCircleLine, RiCloseCircleLine, RiStarLine } from "react-icons/ri"

export const Plans = () => {
  return (
    <section className="bg-zinc-950 text-white ">
      <div className="backgroundtest py-20">
        <div className="container-grid text-center ">
          <h2 className="text-4xl font-semibold mb-4">Conheça nossos planos de assinatura</h2>
          <p className="mb-24 text-sm text-zinc-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quasi tempora quod nisi adipisci architecto aspernatur facilis nostrum fugit dicta assumenda.</p>

          <section className="flex flex-col items-center md:flex-row md:justify-between ">

            <div className="bg-white/90  text-black/90 p-5 py-10 rounded-lg text-left w-[30%] z-10">
              <h3 className="font-semibold text-xl text-zinc-800">Essecial</h3>
              <p className="text-4xl font-bold mb-8">Grátis</p>
              <button className="mb-10 text-center bg-zinc-900 text-white w-full rounded-lg py-3">Assinar Agora</button>

              <ul className="flex flex-col">
                <li className="flex items-center gap-2 border-b border-black/50 py-3"><RiCheckboxCircleLine size={'22px'} /> Até 2 links</li>
                <li className="flex items-center gap-2 border-b border-black/50 py-3"><RiCheckboxCircleLine size={'22px'} /> sem limite de numeros</li>
                <li className="flex items-center gap-2 border-b border-black/50 py-3 text-zinc-500"><RiCloseCircleLine size={'22px'} /> Url personalizavel</li>
                <li className="flex items-center gap-2 border-b border-black/50 py-3 text-zinc-500"><RiCloseCircleLine size={'22px'} /> Url não presonalizaveis</li>
                <li className="flex items-center gap-2 border-b border-black/50 py-3 text-zinc-500"><RiCloseCircleLine size={'22px'} /> Metricas de trafego</li>
              </ul>
            </div>

            <div className="bg-white/90 text-black/90 p-4 py-10 rounded-lg text-left w-[30%] z-10 h-[560px] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-800 text-white text-xs font-semibold rounded-lg px-4 py-1 flex items-center gap-2"><RiStarLine />RECOMENDADO</div>

              <h3 className="font-semibold text-xl text-zinc-800">Essecial</h3>
              <p className="text-4xl font-bold mb-8">R$97,00<span className="text-base font-medium text-zinc-500"> /mês</span></p>
              <button className="mb-10 text-center bg-zinc-900 text-white w-full rounded-lg py-3">Assinar Agora</button>

              <ul className="flex flex-col">
                <li className="flex items-center gap-2 border-b border-black/50 py-3"><RiCheckboxCircleLine size={'22px'} /> Até 20 links</li>
                <li className="flex items-center gap-2 border-b border-black/50 py-3"><RiCheckboxCircleLine size={'22px'} /> Sem limite de numeros</li>
                <li className="flex items-center gap-2 border-b border-black/50 py-3"><RiCheckboxCircleLine size={'22px'} />Url personalizavel</li>
                <li className="flex items-center gap-2 border-b border-black/50 py-3"><RiCheckboxCircleLine size={'22px'} />Metricas de trafego</li>
                <li className="flex items-center gap-2 border-b border-black/50 py-3"><RiCloseCircleLine size={'22px'} /> rl não presonalizaveis</li>
              </ul>
            </div>

            <div className="bg-white/90 text-black/90 p-4 py-10 rounded-lg text-left w-[30%] z-10">

              <h3 className="font-semibold text-xl text-zinc-800">Essecial</h3>
              <p className="text-4xl font-bold mb-8">R$147,00<span className="text-base font-medium text-zinc-500"> /mês</span></p>
              <button className="mb-10 text-center bg-zinc-900 text-white w-full rounded-lg py-3">Assinar Agora</button>

              <ul className="flex flex-col">
                <li className="flex items-center gap-2 border-b border-black/50 py-3"><RiCheckboxCircleLine size={'22px'} />Links ilimitados</li>
                <li className="flex items-center gap-2 border-b border-black/50 py-3"><RiCheckboxCircleLine size={'22px'} /> sem limite de numeros</li>
                <li className="flex items-center gap-2 border-b border-black/50 py-3"><RiCheckboxCircleLine size={'22px'} className="" /> url personalizavel</li>
                <li className="flex items-center gap-2 border-b border-black/50 py-3"><RiCloseCircleLine size={'22px'} /> url não presonalizaveis</li>
                <li className="flex items-center gap-2 border-b border-black/50 py-3"><RiCloseCircleLine size={'22px'} /> sem metricas de trafego</li>
              </ul>
            </div>

          </section>

        </div>
      </div>
    </section>
  )
}