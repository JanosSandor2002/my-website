import {
  OPEN_MENU,
  OPEN_PROJECTS,
  OPEN_FORM,
  OPEN_STUDIES,
  SET_ICONNAME,
  REMOVE_ICONNAME,
} from './Actions';

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true,
        isProjectsOpen: false,
        isFormOpen: false,
        isStudiesOpen: false,
      };
    case OPEN_PROJECTS:
      return {
        ...state,
        isMenuOpen: false,
        isProjectsOpen: true,
        isFormOpen: false,
        isStudiesOpen: false,
      };
    case OPEN_STUDIES:
      return {
        ...state,
        isMenuOpen: false,
        isProjectsOpen: false,
        isFormOpen: false,
        isStudiesOpen: true,
      };
    case OPEN_FORM:
      return {
        ...state,
        isMenuOpen: false,
        isProjectsOpen: false,
        isFormOpen: true,
        isStudiesOpen: false,
      };
    case SET_ICONNAME:
      return {
        ...state,
        iconName: action.payload,
      };
    case REMOVE_ICONNAME:
      return {
        ...state,
        iconName: '',
      };
    default:
      return state;
  }
};

export default reducer;
