import React from 'react'
import { isDarkStorage } from './utils/accessStorage'

type ContextType = {
  isDarkContext: [boolean, () => void];
};

const InitialState: ContextType = {
  isDarkContext: [isDarkStorage(), () => {return}]
}

export const AppContext = React.createContext(InitialState)
