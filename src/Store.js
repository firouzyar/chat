import {combineReducers,compose,createStore,applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";

//reducers
import {threadsReducer} from "./containers/Chat/Threads/_redux/reducer";
import {profileReducer} from "./containers/Chat/Profile/_redux/reducer";
import {messageReducer} from "./containers/Chat/Message/_redux/reducer";

const composeenhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () =>{
    const store = createStore(combineReducers({
            threads:threadsReducer,
            profile:profileReducer,
            message:messageReducer,
    }),
        composeenhance(applyMiddleware(ReduxThunk))
    );
    return store;
}