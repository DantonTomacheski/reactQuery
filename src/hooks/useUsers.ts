import { createContext } from "react"
import { ListContext, ListTypesContext } from "../context/UserListContext"

function useUsers() {
  const values = createContext(ListContext) as unknown as ListTypesContext

  return values
}

export { useUsers }