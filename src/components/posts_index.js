import React, { Component } from 'react';
import { connect }  from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts }from '../actions/index'



class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  // componentDidMount() {
  //   console.log('I see what you did there')
  // }

  render() {
    return(
      <div>List of Blog Posts</div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }


export default connect(null, { fetchPosts })(PostsIndex)

// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex)


// in order to allow this component to call an action creator, we hve to promote it to a container because it will handle state
