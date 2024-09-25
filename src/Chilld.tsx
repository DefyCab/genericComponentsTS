import { ReactNode } from "react"

type ChildProps = {
  name: string
  age: number
  children?: ReactNode
}

export function Child({ name, age, children }: ChildProps) {
  return (
    <div>
      <h3> PropName: </h3> {name}
      <h3> PropAge: </h3> {age}
      <h3> Years left of coding: </h3> {65 - age}
      <p>{children}</p>
    </div>
  )
}
