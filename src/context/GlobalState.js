import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial state

const initialState = {
  transactions: [
    {id: 1, text: 'Flores', amount: -40000},
    {id: 2, text: 'Café', amount: -3500},
    {id: 3, text: 'Michelle', amount: -20000},
    {id: 4, text: 'Salario', amount: 550000},
  ],
};

//Create context
export const GlobalContext = createContext(initialState);
//Provider Component
export const GlobarProvider = ({ children }) => {
 const [state, dispatch] = useReducer(AppReducer, initialState);

 return (<GlobalContext.Provider value={{
     transactions: state.transactions
 }}>
     {children}
 </GlobalContext.Provider>>)
}
