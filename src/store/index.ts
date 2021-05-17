import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import reducer from "./reducer"
import logger from "redux-logger"

const store: Store<UserState, UserAction> & {
    dispatch: DispatchType
  } = createStore(reducer, composeWithDevTools(applyMiddleware(logger ,thunk)))

export default store;