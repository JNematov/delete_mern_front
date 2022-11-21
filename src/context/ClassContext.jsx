import { useReducer } from "react";
import { createContext } from "react";

export const ClassContext = createContext();

const ClassContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type){
            case 'SET_CLASSES':
                return {classes: action.payload}
            default: 
                return state
        }
    }, {classes : null})

    return (
        <ClassContext.Provider value={{...state, dispatch}}>
            {children}
        </ClassContext.Provider>
    );
}

export default ClassContextProvider;