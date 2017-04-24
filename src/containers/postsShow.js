import React, {Component} from 'react'
import {loadPost, deletePost} from '../actions/postActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class postsShow extends Component {
    componentWillMount(){
        this.props.loadPost(this.props.match.params.id)
    }
    onDeleteClick = () => {
        this.props.deletePost(this.props.match.params.id)
            .then(() => {this.props.history.push("/")})
            .catch(err => {alert('Oooops Server error, please try again')})
    }
    render() {
        const {post} = this.props
        if(!post){
            return <div>Loading.....</div>
        }
        return (
            <div>
                <Link to="/">Back to index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick}>Delete Post</button>
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    }
}


export default connect(mapStateToProps, {loadPost, deletePost})(postsShow)