import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app';
import PostsIndex from './components/posts_index';

const Greeting = () => {
  return <div>Hey there</div>;
};

// exporting so routes are importable to index.js
export default (
  // these are nested routes
  // child component (greeting) is passed to parent component app
  <Route path="/" component={App}>
    // IndexRoute will be default route if path isn't a child
    <IndexRoute component={PostsIndex} />
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />
  </Route>
);


// mathces path of / to App components

// IndexRoute is helper that behaves like a route. It's shown whenever URL matches up with path defiend by parent but not children
