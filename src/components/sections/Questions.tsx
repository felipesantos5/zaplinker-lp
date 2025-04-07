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
                A Zaplinker é uma ferramenta que possibilita alternar seus leads em dois ou mais WhatsApp.
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
              <AccordionTrigger>Possui suporte ?</AccordionTrigger>
              <AccordionContent>
                Oferecemos o suporte mais ativo do mercado. Nosso atendimento via WhatsApp funciona de segunda a sexta, das 8h às 20h.
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