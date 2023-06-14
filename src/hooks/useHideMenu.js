import { useContext, useEffect } from 'react'
import { UiContext } from '../context/UiContext'

export const useHideMenu = ( ocultar ) => {

    const {showMenu, hiddenMenu} = useContext(UiContext)

    useEffect( () => {
        
        if(ocultar){
            hiddenMenu()
        } else {
            showMenu()
        }
    }, [ocultar, hiddenMenu, showMenu])
    
}
