import AnimatedSection from "../ui/animetedSection";
import Marquee from "../ui/marquee";
import { ReviewCard } from "../ui/ReviewCard";

const reviews = [
  // {
  //   name: "Calos Rocha",
  //   username: "Co-produtor",
  //   body: "I've never seen anything like this before. It's amazing. I love it.",
  //   img: "https://avatar.vercel.sh/jack",
  // },
  {
    name: "Bernardo Silva",
    username: "gestor de trafego",
    body: "Me ajudou muito a criar links curtos e trackear tudo. Os relatórios para meus clientes ficaram muito mais precisos.",
    img: "https://avatar.vercel.sh/jill",
  },
  // {
  //   name: "Gabriel Fonseca",
  //   username: "Social media",
  //   body: "I'm at a loss for words. This is amazing. I love it.",
  //   img: "https://avatar.vercel.sh/jane",
  // },
  {
    name: "Fernanda Ribeiro",
    username: "Lançamentos",
    body: "Criei uma diferentes links e usei QR codes nos meus eventos presenciais. O controle que tive sobre cada etapa foi perfeito!",
    img: "https://avatar.vercel.sh/rauchg",
  },
  {
    name: "Italo Nogueira",
    username: "Criador de conteudo",
    body: "Uso o link personalizado na minha bio do Instagram, e a taxa de cliques aumentou muito. Sem falar que fica muito mais profissional.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Jessica Medeiros",
    username: "Lançamentos",
    body: "Usei o Zaplinker para metrificar cada etapa do meu lançamento e os resultados foram impressionantes.",
    img: "https://avatar.vercel.sh/jony",
  },
  {
    name: "Caio Correia",
    username: "Social media",
    body: "Minha taxa de cliques aumentou consideravelmente desde que comecei a usar os links na bio dos meus clientes. ",
    img: "https://avatar.vercel.sh/jony",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


export function SofialProof() {
  return (
    <AnimatedSection className="relative flex h-[320px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden pt-20">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-neutral-50 dark:from-primaryColor"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-neutral-50 dark:from-primaryColor"></div>
    </AnimatedSection>
  );
}