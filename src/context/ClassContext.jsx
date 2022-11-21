import { useReducer } from "react";
import { createContext } from "react";

export const classContext = createContext();

const classContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type){
            case 'SET_WORKOUTS':
                return {workouts: action.payload}
            default: 
                return state
        }
    }, {classes : null})

    return (
        <classContextProvider.Provider value={{...state, dispatch}}>
            {children}
        </classContextProvider.Provider>
    );
}

export default classContextProvider;