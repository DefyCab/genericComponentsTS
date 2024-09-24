import React, { Fragment, ReactNode } from "react"
import "./App.css"

export default function App() {
  return (
    <List
      data={[
        { id: 1, name: "Love" },
        { id: 2, name: "Erik" },
      ]}
      getKey={(person) => person.id}
      getRow={(person) => <div>{person.name}</div>}
    />
  )
}

type ListProps = {
  data: { id: number; name: string }[]
  getKey: (iten: { id: number; name: string }) => React.Key
  getRow: (item: { id: number; name: string }) => ReactNode
}

function List({ data, getKey, getRow }: ListProps) {
  return data.map((item) => (
    <Fragment key={getKey(item)}>{getRow(item)}</Fragment>
  ))
}
