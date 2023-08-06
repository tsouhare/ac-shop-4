import { createContext } from "react";
import { useState } from "react";

export const FormContext = createContext()

export function FormContextProvider({children}) {

    const [payInfo, setPayInfo] = useState({
        cardName:'',
        cardNumber:'',
        cardDate:'',
        cardCVC:''
    })

    return(
        <FormContext.Provider value={{payInfo, setPayInfo}}>
            {children}
        </FormContext.Provider>
    )
}