import * as types from './actionTypes'
import postAPI from '../api/postApi'


export function loadPostsSuccess(posts) {
    return { type: types.LOAD_POSTS_SUCCESS, posts}
}

export function loadPostSuccess(post) {
    return { type: types.LOAD_POST_SUCCESS, post}
}

export function savePostSuccess(post) {
    return { type: types.SAVE_POST_SUCCESS, post}
}

export function deletePostSuccess(post) {
    return { type: types.DELETE_POST_SUCCESS, post}
}

export function loadPosts() {
    return function(dispatch) {
        return postAPI.getPosts()
            .then(posts => dispatch(loadPostsSuccess(posts)))
    }
}

export function loadPost(id) {
    return function(dispatch) {
        return postAPI.getPost(id)
            .then(post => dispatch(loadPostSuccess(post)))
    }
}

export function savePost(post) {
    return function(dispatch) {
        return postAPI.savePost(post)
            .then(post => dispatch(savePostSuccess(post)))
    }
}

export function deletePost(id) {
    return function(dispatch) {
        return postAPI.deletePost(id)
            .then(post => dispatch(deletePostSuccess(post)))
    }
}