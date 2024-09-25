import React, { ReactNode } from "react"

type ChildProps = {
  name: string
  age: number
  children?: ReactNode
  style?: React.CSSProperties
}

export function Child({ name, age, children, style }: ChildProps) {
  return (
    <div>
      <h3 style={style}> PropName: </h3> {name}
      <h3> PropAge: </h3> {age}
      <h3> Years left of coding: </h3> {65 - age}
      <p>{children}</p>
    </div>
  )
}
