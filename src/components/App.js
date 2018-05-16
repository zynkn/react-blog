import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TestPage, NotFoundPage,ListPage, PostPage, EditorPage } from 'pages';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ListPage}/>
        <Route path="/post" component={PostPage}/>
        <Route path="/editor" component={EditorPage}/>
        <Route path="/test" component={TestPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
};

export default App;