import { createContext, useContext, useState } from "react";
import MainMenu from '../MainApi'
const AppContext = createContext();

const AppProvider = ({children})=>{
    const [data, setData] = useState(MainMenu)
    return <AppContext.Provider value={{data, setData}}>{children}</AppContext.Provider>
}
// global custom hooks
const useGlobalContext = ()=>{
return useContext(AppContext)
}
export {AppContext, AppProvider, useGlobalContext}