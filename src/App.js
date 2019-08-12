import React, { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';

class App extends Component {
  constructor(){
    super();
      this.state = {
    task: tasks
  }
  }


  render(){
    return (
        <div>
          <Tasks />
          <p>{this.state.task.map(e => e.title )}</p>
        </div>
      );

  }
}

export default App;
