// this is the reducer that will respond to the get posts action creator
import { FETCH_POSTS, FETCH_POST } from '../actions/index'


const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_POSTS:
  return { ...state, all: action.payload.data };
  case FETCH_POST:
    return { ...state, post: action.payload.data };
  default:
    return state;
  }
}
