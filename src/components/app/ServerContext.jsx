import { createContext, useContext, useState } from "react";

const Context = createContext()

const ServerProvider = ({children}) => {
    const server = {
        server_dev: "http://localhost:8080",
        server_dep: "https://mavqut.cleverapps.io"
    }
    const isTester = false
    const [state,setState] = useState(isTester ? server.server_dev : server.server_dep)
    const value = {
        state,
        setState
    }
    return (
        <Context.Provider value={value}>
            <Context.Consumer>
                {
                    () => children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

const useServer = (setterOnly) => {
    const { state, setState } = useContext(Context)
    return setterOnly ? [setState] : [state, setState]
}

export {
    ServerProvider,
    useServer
}