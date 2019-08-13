import React, { Component } from 'react';
import Task from './Task';

export default class Tasks extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<Task task ={ this.props.task }/>
				</div>
			</div>
		)
	}
}