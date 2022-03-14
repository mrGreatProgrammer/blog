import {
  setDarkSideAC,
  setLightSideAC,
} from "../../redux/action-creators/app-action";
import appReducer from "../../redux/reducers/app-reducer";

let state = {
  darkMode: false,
};

describe("------- SET DARK SIDE -------", () => {
  it("darkMode should be true", () => {
    let action = setDarkSideAC();
    let newState = appReducer(state, action);

    expect(newState.darkMode).toEqual(true);
  });
});

describe("------- SET LIGHT SIDE ------", () => {
  it("darkMode should be false", () => {
    let action = setLightSideAC();
    let newState = appReducer(state, action);

    expect(newState.darkMode).toEqual(false);
  });
});
