// make action creator that grabs blog posts from API

import axios from 'axios';

// defining our action TYPE
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=supremenachos';


export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props)

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}


// even though we don't need a return for a delete request, we should still make all our action creators complete
export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  }

}
