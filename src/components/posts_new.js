import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
  // nearly identical to connect function
  // use reduxForm function to wrap PostsNew component

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // same as const handleSubmit = this.props.handleSubmit
    // const title = this.props.fields.title

    return (
      <form onSubmit={handleSubmit}>
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

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);

// reduxForm is injecting helpers into this.props
  // we'll have this.props.handleSubmit()
  // this.props.title etc.


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
