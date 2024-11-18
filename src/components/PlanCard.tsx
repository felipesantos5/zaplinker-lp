interface PlanCardProps {
  title: string
  value: string
}


export const PlanCard = (props: PlanCardProps) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.value} <span>/mês</span></p>
      <button>Assinar Agora</button>
    </div>
  )
}