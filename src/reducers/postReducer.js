import * as types from '../actions/actionTypes'
import InitialState from './initialState'

export default function postReducer(state = InitialState, action){
    switch(action.type){
        case types.LOAD_POSTS_SUCCESS:
            return { ...state, all: action.posts.data}
        case types.LOAD_POST_SUCCESS:
            return { ...state, post: action.post.data}
        case types.DELETE_POST_SUCCESS:
            return { ...state, post: action.post.data}
        default:
            return state
    }
}