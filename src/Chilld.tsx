import { ReactNode } from "react"

type Childprops = {
    name: string
    age: number
    children?: ReactNode 
}

export function Child({ name, age, children }: ChildProps) {
  return (
    <div>
      <h3> PropName: </h3> {name}
      <h3> PropAge: </h3> {age}
    </div>
  )
}
