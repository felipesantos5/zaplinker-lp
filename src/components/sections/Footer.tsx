import { RiInstagramLine } from "react-icons/ri"
import logoWhite from "../../assets/zaplinker-white.png"
import logoBlack from "../../assets/zaplinker-black.png"
import { useTheme } from "../../context/ThemeContext";

export const Footer = () => {
  const { isDarkMode } = useTheme();

  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="py-5 text-white border-t border-black/10 dark:border-white/20">
      <section className="container-grid flex gap-10 flex-row justify-between items-center px-6">
        <img src={!isDarkMode ? logoBlack : logoWhite} alt="zaplinker" width={'36px'} height={'36px'} className="h-[36px]" />
        <div className="flex flex-wrap gap-4 sm:flex-row items-center">
          <a href="https://www.instagram.com/zaplinker" className="bg-zinc-800 dark:bg-zinc-800 p-1 rounded-full hover:bg-zinc-600 dark:hover:bg-zinc-700 transition-colors"><RiInstagramLine size={'20px'} /></a>
          <div className="flex flex-col md:flex-row gap-2">
            <a href="/politicas-de-privacidade" className="text-sm text-zinc-600 dark:text-zinc-300 hover:underline">Poltica de privavidade</a>
            <p className="text-center text-sm text-zinc-600 dark:text-zinc-300">© {getCurrentYear()}   Zaplinker.</p>
          </div>
        </div>
      </section>
    </footer>
  )
}