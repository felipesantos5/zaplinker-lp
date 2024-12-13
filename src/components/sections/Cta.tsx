// import { Link } from 'react-scroll';
import ShinyButton from "../ui/shiny-button";
import { Button } from '../ui/button';
import AnimatedSection from '../ui/animetedSection';
import BlurIn from '../ui/blur-in';

export const Cta = () => {
  return (
    <AnimatedSection className='container-grid pb-16 md:pb-24 pt-44 flex flex-col items-center'>
      {/* <BlurIn word="" className='text-4xl sm:text-5xl font-medium tracking-tight text-center md:text-7xl max-w-2xl'></BlurIn> */}
      <h1 className='text-5xl font-medium tracking-tight text-center md:text-7xl max-w-2xl'><span className='title'>Links</span> fracos limitam seu <span className='title'>alcace</span></h1>
      <BlurIn word="Não permita que links ineficientes freiem seu crescimento digital. Zaplinker reforça suas conexões digitais, maximizando seu alcance e impulsionando resultados mensuráveis." className="text-muted-foreground max-w-2xl sm:text-lg tracking-tight my-6 text-center"></BlurIn>
      <div className='flex gap-4'>
        <a href="https://app.zaplinker.com">
          <ShinyButton className='z-10'>
            Teste grátis
          </ShinyButton>
        </a>

        {/* <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-200}
          duration={2200}
        > */}
        <Button className='z-10'>Continuar explorando</Button>
        {/* </Link> */}
      </div>
    </AnimatedSection >
  )
}