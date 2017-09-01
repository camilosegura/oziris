import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import App from './App.jsx';
import Todo from './Todo.jsx';
import Route2 from './Route2.jsx';
import Picture from './Picture.jsx';
import GPS from './GPS.jsx';
import Directory from './Directory.jsx';


FlowRouter.route('/Todo', {
  name: 'Todo',
  action() {
    ReactLayout.render( App, { yield: <Todo /> } );
  },
});

FlowRouter.route('/route-2', {
    name: 'route-2',
    action() {
      ReactLayout.render( App, { yield: <Route2 /> } );
    },
  });

  FlowRouter.route('/picture', {
    name: 'picture',
    action() {
      ReactLayout.render( App, { yield: <Picture /> } );
    },
  });

  FlowRouter.route('/', {
    name: 'gps',
    action() {
      ReactLayout.render( App, { yield: <GPS /> } );
    },
  });

  FlowRouter.route('/directory', {
    name: 'directory',
    action() {
      ReactLayout.render( App, { yield: <Directory /> } );
    },
  });
