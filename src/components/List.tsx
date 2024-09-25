import { Fragment } from "react/jsx-runtime"
import { ReactNode } from "react"

type ListProps<T> = {
  data: T[]
  getKey: (iten: T) => React.Key
  getRow: (item: T) => ReactNode
}

export function List<K>({ data, getKey, getRow }: ListProps<K>) {
  return data.map((item) => (
    <Fragment key={getKey(item)}>{getRow(item)}</Fragment>
  ))
}
