import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import AnimatedSection from "../ui/animetedSection"

export const Questions = () => {
  return (
    <AnimatedSection className="py-20 dark:text-white">
      <div className="container-grid" id="plansSection">
        <h2 className="text-center text-5xl mb-10 font-semibold">Perguntas frequentes</h2>
        <div className="max-w-2xl m-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Oque é Zaplinker</AccordionTrigger>
              <AccordionContent>
                O Zaplinker é uma ferramenta inteligente que permite criar links personalizados para centralizar múltiplos números de WhatsApp em um único link. Seus clientes clicam no link e são redirecionados automaticamente para um dos números cadastrados, enquanto você gerencia tudo de forma simples e analisa métricas detalhadas em tempo real.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>É possível utilizar com o meu WhatsApp Business?</AccordionTrigger>
              <AccordionContent>
                Sim, é possível utilizar tanto o WhatsApp normal quanto o WhatsApp Business.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Meus números ficam expostos no link?</AccordionTrigger>
              <AccordionContent>
                Não! Os números são protegidos e apenas redirecionados através do Zaplinker. Seus clientes veem apenas o link personalizado, garantindo profissionalismo e segurança.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Posso adicionar vários números de WhatsApp no mesmo link?</AccordionTrigger>
              <AccordionContent>
                Sim! Você pode cadastrar quantos números quiser e gerenciá-los livremente: ativar, desativar, adicionar ou remover a qualquer momento. O link permanece o mesmo, mas os contatos são direcionados dinamicamente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Possui suporte ?</AccordionTrigger>
              <AccordionContent>
                Oferecemos o suporte. Nosso atendimento via WhatsApp funciona de segunda a sexta, das 8h às 20h.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Possui suporte ?</AccordionTrigger>
              <AccordionContent>
                Oferecemos o suporte mais ativo do mercado. Nosso atendimento via WhatsApp funciona de segunda a sexta, das 8h às 20h, e aos finais de semana, das 10h às 15h.
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
        </div>
      </div>
    </AnimatedSection>
  )
}