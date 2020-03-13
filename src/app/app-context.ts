import React from "react"
import { AppMode } from "./root.component"

interface IAppContext {
    appMode: AppMode | null
}

export const AppContext = React.createContext<IAppContext>({
    appMode: null
})
