import React, { Component } from 'react';
import { connect }  from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router';
  // Link is a normal React component

class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
         <Link to={"posts/" + post.id}>
           <span className="pull-xs-right">{post.categories}</span>
           <strong>{post.title}</strong>
         </Link>
       </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
          Add a Post
          </ Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)

// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex)


// in order to allow this component to call an action creator, we hve to promote it to a container because it will handle state
