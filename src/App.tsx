import { About } from "./components/sections/About"
import { Cta } from "./components/sections/Cta"
import { Footer } from "./components/sections/Footer"
import { Header } from "./components/sections/Header"
import { Plans } from "./components/sections/Plans"
import { Questions } from "./components/sections/Questions"
import AnimatedGridPattern from "./components/ui/animated-grid-pattern"
import { cn } from "./lib/utils"

function App() {

  return (
    <div className="bg-neutral-50 dark:bg-primaryColor">
      <Header />
      <Cta />
      <AnimatedGridPattern
        className={cn(
          "[mask-image:radial-gradient(1050px_circle_at_center,white,transparent)]",
          "h-[240%] skew-y-12",
        )}
      />
      <About />
      <Plans />
      <Questions />

      <Footer />
    </div>
  )

}

export default App
