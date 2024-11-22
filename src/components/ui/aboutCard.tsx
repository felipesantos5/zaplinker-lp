import { ReactNode } from "react"

interface AboutCardProps {
  icon: ReactNode
  title: string
  text: string
}

export const AboutCard = (props: AboutCardProps) => {
  return (
    <div
      className="shadow-2xl rounded-lg p-4 border :border-black bg-white dark:bg-primaryColor z-10">
      <div className="flex gap-4 items-center mb-4">
        {props.icon}
        <h3 className="font-semibold">{props.title}</h3>
      </div>
      <p className="text-sm font-medium">{props.text}</p>
    </div>
  )
}