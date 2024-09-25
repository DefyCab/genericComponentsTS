import React, { Fragment, ReactNode } from "react"
import { Child } from "./Chilld"
import "./App.css"

export default function App() {
  return (
    <>
      <Child />
      <List
        data={[
          { id: 1, name: "Love", age: 45 },
          { id: 2, name: "Erik", age: 48 },
        ]}
        getKey={(person) => person.id}
        getRow={(person) => (
          <div>
            {person.name} {person.age}
          </div>
        )}
      />
    </>
  )
}

type ListProps<T> = {
  data: T[]
  getKey: (iten: T) => React.Key
  getRow: (item: T) => ReactNode
}

function List<K>({ data, getKey, getRow }: ListProps<K>) {
  return data.map((item) => (
    <Fragment key={getKey(item)}>{getRow(item)}</Fragment>
  ))
}
