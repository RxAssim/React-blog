import {combineReducers} from 'redux'
import PostReducer from './postReducer'
import { reducer as formReducer } from 'redux-form'
// Import reducers here
const rootReducer = combineReducers({
// Add reducers here : something: somethingReducer,
    posts: PostReducer,
    form: formReducer
})

export default rootReducer