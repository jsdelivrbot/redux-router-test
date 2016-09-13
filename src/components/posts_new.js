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
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type= "text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : '' }
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : '' }
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : '' }
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }

  if (!values.categories) {
    errors.categories = 'Enter a category';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors
}





// connect: first argument is mapStateToProps, seocnd is mapDispatchToProps
// reduxForm: first is form config, 2nd is mapStateToProps, third is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
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
