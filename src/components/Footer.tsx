import { RiInstagramLine } from "react-icons/ri"
import logo from "../assets/zaplinker-white.png"

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-10 pb-10 text-white border-t border-white/20">
      <section className="container-grid flex flex-col gap-10 lg:flex-row md:justify-between md:items-center">
        <img src={logo} alt="zaplinker" width={'36px'} height={'36px'} className="h-[36px]" />
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <a href="https://www.instagram.com/zaplinker" className="bg-zinc-800 p-1 rounded-full hover:bg-zinc-700 transition-all"><RiInstagramLine size={'20px'} /></a>
          <a href="/politi" className="text-sm text-zinc-300 hover:underline">Poltica de privavidade</a>
          <p className="text-center text-sm text-zinc-300">© 2024 Zaplinker.</p>
        </div>
      </section>
    </footer>
  )
}