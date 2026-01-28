import { createContext, useContext, useReducer, useState } from 'react';
import { OPEN_MENU, OPEN_PROJECTS, OPEN_FORM, OPEN_STUDIES } from './Actions';
import reducer from './reducer';
const AppContext = createContext();

const initialState = {
  loading: false,
  isMenuOpen: true,
  isProjectsOpen: false,
  isStudiesOpen: false,
  isFormOpen: false,
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openMenu = () => dispatch({ type: OPEN_MENU });
  const openProjects = () => dispatch({ type: OPEN_PROJECTS });
  const openStudies = () => dispatch({ type: OPEN_STUDIES });
  const openForm = () => dispatch({ type: OPEN_FORM });

  return (
    <AppContext.Provider
      value={{ ...state, openMenu, openForm, openProjects, openStudies }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
