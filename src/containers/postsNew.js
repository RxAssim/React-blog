import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { savePost } from '../actions/postActions'
import {reduxForm, Field} from 'redux-form'
import { connect } from 'react-redux'
import { Link, Prompt} from 'react-router-dom'

class postsNew extends Component {
    render() {
        const { handleSubmit, dirty } = this.props
        const onSubmit = (props) => {
            this.props.savePost(props)
                .then(post => {this.props.history.push('/')})
                .catch(err => {alert('Oooops Server error, please try again')})
        }
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Create a new Post</h3>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <Field name="title" component={renderField} type="text" />
                    <div className="error">{}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="categories" >Categories</label>
                    <Field type="text" name="categories" component={renderField}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <Field name="content" component={renderField} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
                <Prompt message="Are you sure you want to leave ?" when={dirty}/>
            </form>
        )
    }
}

const renderField = ({ input, label, type, meta: { touched, invalid, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input}
                   placeholder={label}
                   type={type}
                   className={`form-control ${touched && invalid ? 'has-danger' : ''}`}
            />
            {touched && ((error && <span className={`${touched && invalid ? 'alert alert-danger' : ''}`}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const validate = values => {
    const errors = {}
    // title validation
    if (!values.title) {
        errors.title = 'Required'
    } else if (values.title.length > 15) {
        errors.title = 'Must be 15 characters or less'
    }
    // categories validation
    if (!values.categories) {
        errors.categories = 'Required'
    }
    // content validation
    if (!values.content) {
        errors.content = 'Required'
    } else if (values.content.length > 200) {
        errors.content = 'Must be 15 characters or less'
    }
    return errors
}

export default connect(null, { savePost }) (reduxForm({
    form: 'PostsNew',
    validate
})(postsNew))


