import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
  // nearly identical to connect function
  // use reduxForm function to wrap PostsNew component

import { createPost } from '../actions/index'


class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // same as const handleSubmit = this.props.handleSubmit
    // const title = this.props.fields.title

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type= "text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// connect: first argument is mapStateToProps, seocnd is mapDispatchToProps
// reduxForm: first is form config, 2nd is mapStateToProps, third is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);

// reduxForm is injecting helpers into this.props
  // we'll have this.props.handleSubmit()
  // this.props.title etc.


// usually to import action creator into component, we would use connect. but we have reduxForm. So we need to merge reduxForm and connect.
  // reduxForm has same behavior as connect, so we can use it to inject action creators into our components and create a container out of component



// user types something in..record it on application state
  // pulling component state back up to application state
  // below is what's happening behind the scene
// state === {
//   form: {
//     PostsNew: {
//       title: '....',
//       categories: '....',
//       content: '....'
//     }
//   }
// }
