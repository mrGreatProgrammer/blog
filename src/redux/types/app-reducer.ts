export interface IAppState {
  darkMode: boolean;
}
export enum AppActionsType {
  SET_DARK_SIDE = "SET_DARK_SIDE",
  SET_LIGHT_SIDE = "SET_LIGHT_SIDE",
}
export interface SetDarkSideAction {
  type: AppActionsType.SET_DARK_SIDE;
}
export interface SetLightSideAction {
  type: AppActionsType.SET_LIGHT_SIDE;
}
export type AppAction = SetDarkSideAction | SetLightSideAction;
