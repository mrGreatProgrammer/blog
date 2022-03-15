import { AppAction, AppActionsType, IAppState } from "../types/app-reducer";

let defaultState: IAppState = {
  darkMode: false,
};

export default function appReducer(state: IAppState = defaultState, action: AppAction): IAppState {
  switch (action.type) {
    case AppActionsType.SET_DARK_SIDE:
      return {
        ...state,
        darkMode: true,
      };
    case AppActionsType.SET_LIGHT_SIDE:
      return {
        ...state,
        darkMode: false,
      };
    default:
      return state;
  }
}
