import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

import { thunk } from "redux-thunk";
import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/acountSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// const store =configureStore({
//   reducer: {
//     account: accountReducer,
//     customer: customerReducer,
//   },
// });

// store.dispatch({ type: "account/deposit", payload: 4000 });
// store.dispatch({ type: "account/withdraw", payload: 1000 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 5000, purpose: "buying car" },
// });
// store.dispatch({ type: "account/payLoan" });

// store.dispatch(requestLoan(200, "eating"));
// store.dispatch(createCustomer("ranjit mallik", "12321344"));

// console.log(store.getState());

export default store;
