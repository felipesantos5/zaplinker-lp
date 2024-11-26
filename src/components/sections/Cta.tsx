import { Link } from 'react-scroll';
import ShinyButton from "../ui/shiny-button";
import { Button } from '../ui/button';
import AnimatedSection from '../ui/animetedSection';
import BlurIn from '../ui/blur-in';

export const Cta = () => {
  return (
    <AnimatedSection className='container-grid pb-24 pt-48 flex flex-col items-center'>
      <BlurIn word="Links fracos limitam seu alcace" className='text-4xl sm:text-5xl font-medium tracking-tight text-center md:text-7xl max-w-2xl'></BlurIn>
      {/* text-4xl sm:text-5xl font-medium tracking-tight text-center md:text-7xl max-w-4xl */}
      <BlurIn word="Otimize seu atendimento e aumente suas conversões com links personalizados e QR codes prontos para ação. Torne cada interação mais eficiente e acessível." className="text-muted-foreground max-w-2xl sm:text-lg tracking-tight my-6 text-center"></BlurIn>
      {/* text-muted-foreground max-w-2xl sm:text-lg tracking-tight my-6 text-center */}
      <div className='flex gap-4'>
        <Link
          activeClass="active"
          to="plansSection"
          spy={true}
          smooth={true}
          offset={-980}
          duration={2200}
        >
          <ShinyButton className='z-10'>
            Teste grátis
          </ShinyButton>
        </Link>

        <Button className='z-10'>Continuar explorando</Button>
      </div>
    </AnimatedSection>
  )
}