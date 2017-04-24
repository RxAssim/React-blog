import React, {Component} from 'react'
import { loadPosts } from '../actions/postActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class postsIndex extends Component {
    componentWillMount() {
        this.props.loadPosts()
    }

    renderPosts() {
        const {posts} = this.props
        return posts.all.map((post) => {
            return (
                <Link to={`/posts/${post.id}`} key={post.id}>
                    <li className="list-group-item" >
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </li>
                </Link>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new">
                        Add Post
                    </Link>
                </div>
                <div>
                    <h1>Posts</h1>
                    <ul className="list-group">{this.renderPosts()}</ul>
                </div>
            </div>
        )
    }
}

postsIndex.propTypes = {
    posts: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps, {loadPosts})(postsIndex)