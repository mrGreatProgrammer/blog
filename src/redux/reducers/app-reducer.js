import { SET_DARK_SIDE, SET_LIGHT_SIDE } from "../action-creators/app-action";

let defaultState = {
  darkMode: false,
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_DARK_SIDE:
      return {
        ...state,
        darkMode: true,
      };
    case SET_LIGHT_SIDE:
      return {
        ...state,
        darkMode: false,
      };
    default:
      return state;
  }
}
