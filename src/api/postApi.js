import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://reduxblog.herokuapp.com/api',
    timeout: 4000,
})


export default class PostAPI {
    // Get all posts
    static getPosts() {
        return instance.get('posts')
    }
    // Get one post by Id
    static getPost(id) {
        return instance.get(`posts/${id}`)
    }
    // Save post
    static savePost(post) {
        return instance.post('posts', post)
    }
    // Delete post
    static deletePost(id) {
        return instance.delete(`posts/${id}`)
    }
}
