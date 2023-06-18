import { createContext } from "react"


const Context = createContext({
  changeMode: () => {},
	mode: null,
	addJspObj: () => {},
	createJsp: () => {},
})

export default Context;