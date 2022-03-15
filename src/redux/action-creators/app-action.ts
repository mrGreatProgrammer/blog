import { AppActionsType, SetDarkSideAction, SetLightSideAction } from "../types/app-reducer";

export const setDarkSideAC = ():SetDarkSideAction => ({ type: AppActionsType.SET_DARK_SIDE });
export const setLightSideAC = ():SetLightSideAction => ({ type: AppActionsType.SET_LIGHT_SIDE });
