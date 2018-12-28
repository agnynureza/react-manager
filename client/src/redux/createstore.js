import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import signInReducer from './signin/sigin.reducer'
import passwordReducer from './password/password.reducer'

const reducers = combineReducers({
    signInReducer: signInReducer,
   passwordReducer: passwordReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store