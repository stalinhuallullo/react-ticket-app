import { createContext, useState } from "react";

export const UiContext = createContext()

export const UiProvider = ({ children }) => {

    const [ ocultarMenu, setOcultarMenu ] = useState(true)

    const showMenu = () =>{
        setOcultarMenu(false);
    }

    const hiddenMenu = () =>{
        setOcultarMenu(true);
    }

    return (
        <UiContext.Provider value={{
            ocultarMenu,

            //methods
            showMenu,
            hiddenMenu
        }}>
            {children}
        </UiContext.Provider>
    )

}