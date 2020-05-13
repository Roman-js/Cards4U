import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import forgotReducer from "./reducers/forgot-reducer";
import profileReducer from "./reducers/profile-reducer";
import registerReducer from "./reducers/register-reducer";
import setNewPassReducer from "./reducers/setNewPass-reducer";
import signInReducer from "./reducers/signIn-reducer";
import decksTableReducer from "./reducers/decksTable-reducer";
import cardsTableReducer from "./reducers/cardsTable-reducer";

const rootReducer = combineReducers({
    forgot: forgotReducer,
    register: registerReducer,
    setNewPass: setNewPassReducer,
    signIn: signInReducer,
    profile: profileReducer,
    decks: decksTableReducer,
    cards: cardsTableReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof rootReducer>
