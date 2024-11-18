import logo from "../assets/zaplinker-white.png"

export const Header = () => {
  return (
    <header className="bg-zinc-950 py-2">
      <section className="container-grid flex items-center justify-between text-white">
        <img src={logo} alt="logo zaplinker" width={'32px'} />
        <nav className="flex gap-5">
          <a href="#funcionalidades" className="transition-colors hover:underline hover:text-zinc-200">Funcionalidade</a>
          <a href="#planos" className="transition-colors hover:underline hover:text-zinc-200">Planos</a>
          <a href="" className="transition-colors hover:underline hover:text-zinc-200">Planos</a>
        </nav>
        <button className="bg-zinc-50 rounded-lg px-2 py-1 text-zinc-900 font-semibold">Acessar o app</button>
      </section>
    </header>
  )
}