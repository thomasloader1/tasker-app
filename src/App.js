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
        <div className= "container">
          <Tasks task = {this.state.task} />
        </div>
      );

  }
}

export default App;
