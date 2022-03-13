import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import appReducer from "./reducers/app-reducer";
import commentsReducer from "./reducers/comments-reducer";
import postsReducer from "./reducers/posts-reducer";

let reducers = combineReducers({
  app: appReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
