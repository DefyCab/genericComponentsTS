import React, { ReactNode } from "react"

type ChildProps = {
  name: string
  age: number
  children?: ReactNode
  h3style?: React.CSSProperties
  divstyle?: React.CSSProperties
}

export function Child({ name, age, children, h3style, divstyle }: ChildProps) {
  return (
    <div style={divstyle}>
      <h3 style={h3style}> PropName: </h3> {name}
      <h3 style={h3style}> PropAge: </h3> {age}
      <h3 style={h3style}> Years left of coding: </h3> {65 - age}
      <p>{children}</p>
    </div>
  )
}
