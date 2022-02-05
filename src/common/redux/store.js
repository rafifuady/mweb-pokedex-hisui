import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer as reducers } from "./rootReducer"


const composeMiddleware = applyMiddleware(thunk);

const store = createStore(
  reducers,
  composeWithDevTools(composeMiddleware)
)

export default store 