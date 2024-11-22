import { Link } from 'react-scroll';
import ShinyButton from "../ui/shiny-button";
import { Button } from '../ui/button';

export const Cta = () => {
  return (
    <section className='container-grid py-24 flex flex-col items-center'>
      <h1 className='text-4xl sm:text-5xl font-medium tracking-tight text-center md:text-7xl max-w-4xl'>Amplifique Seu Alcance: Links WhatsApp Personalizados para Conexões Poderosas</h1>
      <p className='text-muted-foreground max-w-2xl sm:text-lg tracking-tight my-6 text-center'>Otimize seu atendimento e aumente suas conversões com links personalizados e QR codes prontos para ação. Torne cada interação mais eficiente e acessível.</p>
      <div className='flex gap-4'>
        <Link
          activeClass="active"
          to="plansSection"
          spy={true}
          smooth={true}
          offset={-1050}
          duration={2500}
        >
          <ShinyButton className='z-10'>
            Teste de graça
          </ShinyButton>
        </Link>

        <Button className='z-10'>Continuar explorando</Button>

      </div>
    </section>
  )
}