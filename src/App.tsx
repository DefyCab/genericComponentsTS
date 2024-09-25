import { Child } from "./components/Chilld"
import { List } from "./components/List"
import "./App.css"

export default function App() {
  return (
    <>
      <Child
        style={{
          fontWeight: "lighter",
          color: "lightgoldenrodyellow",
        }}
        name="Love"
        age={45}
      >
        I'm just starting my coding journey!
      </Child>
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
