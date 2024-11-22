import { useTheme } from "../../context/ThemeContext";
import logoWhite from "../../assets/zaplinker-white.png"
import logoBlack from "../../assets/zaplinker-black.png"
import { DarkModeButton } from "../ui/darkModeButton"
import { Button } from "../ui/button";

export const Header = () => {
  const { isDarkMode } = useTheme();

  return (
    <header className="py-2 z-50">
      <section className="container-grid flex items-center justify-between text-white">
        <img src={!isDarkMode ? logoBlack : logoWhite} alt="logo zaplinker" width={'32px'} />
        {/* <nav className="flex gap-5">
          <a href="#funcionalidades" className="transition-colors hover:underline hover:text-zinc-200">Funcionalidade</a>
          <a href="#planos" className="transition-colors hover:underline hover:text-zinc-200">Planos</a>
          <a href="" className="transition-colors hover:underline hover:text-zinc-200">Planos</a>
        </nav> */}
        <div className="flex items-center gap-4">
          <DarkModeButton />
          <Button >Acessar o app</Button>
        </div>
      </section>
    </header>
  )
}