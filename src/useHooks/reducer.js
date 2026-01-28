import { OPEN_MENU, OPEN_PROJECTS, OPEN_FORM, OPEN_STUDIES } from './Actions';

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        isMenuOpen: true,
        isProjectsOpen: false,
        isFormOpen: false,
        isStudiesOpen: false,
      };
    case OPEN_PROJECTS:
      return {
        isMenuOpen: false,
        isProjectsOpen: true,
        isFormOpen: false,
        isStudiesOpen: false,
      };
    case OPEN_STUDIES:
      return {
        isMenuOpen: false,
        isProjectsOpen: false,
        isFormOpen: false,
        isStudiesOpen: true,
      };
    case OPEN_FORM:
      return {
        isMenuOpen: false,
        isProjectsOpen: false,
        isFormOpen: true,
        isStudiesOpen: false,
      };
    default:
      throw new Error('no matching for this type of reducer type');
  }
};

export default reducer;
