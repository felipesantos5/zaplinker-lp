import AnimatedSection from "../ui/animetedSection";
import Marquee from "../ui/marquee";
import { ReviewCard } from "../ui/ReviewCard";

const reviews = [
  {
    name: "Calos Rocha",
    username: "Co-produtor",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Matheus Pimentel",
    username: "gestor de trafego",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Bernardo Silva",
    username: "especialista em marketing",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Gabriel Fonseca",
    username: "Social Media",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Gabriela Amaral",
    username: "Copywriter",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Eduardo Motta",
    username: "Gestor de projetos digitais",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Thiago Menegate",
    username: "Especialista em CRO",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Fernanda Ribeiro",
    username: "Especialista em Lançamentos",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Fernanda Ribeiro",
    username: "Criador de Conteúdo",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Fernanda Ribeiro",
    username: "Social mídia",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
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