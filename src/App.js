import React, { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json';
import Task from './components/Task';

class App extends Component {
  constructor(){
    super();
      this.state = {
    task: tasks
  }
  }


  render(){
    return (
        <div className= "container">
          <Task task = {this.state.task} />
        </div>
      );

  }
}

export default App;
