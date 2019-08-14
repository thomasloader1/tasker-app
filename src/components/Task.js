import React, { Component, Fragment } from 'react'
import ButtonSpecial from "./ButtonSpecial";
export default class Task extends Component {
	
	constructor(){
		super();
		this.state={
			todos
		}
		this.priorityCssClass = [];
		this.priortyCssClass['Baja'] = 'warning';
		this.priortyCssClass['Media'] = 'primary';
		this.priortyCssClass['Alta'] = 'danger';

	}

	onChange=(e)=>{
		if (e.taget.value == 1){
			this.setState({color:"card text-white bg-warning mb-3"})
		}else if (e.taget.value == "salio mal") {
			this.setState({color:"card text-white bg-danger mb-3"})

		}
	}

	getClassName = (priority) => this.state.priorityCssClass[priority];

	render() {
		const { task } = this.props;
		return (
			task.map( e =>{
				return(
				<div key={e.id} className={"card text-white bg-"+ this.getClassName(e.priority) +" mb-3"} style={{maxWidth: '18rem'}}>
					<div className="card-header">{ e.id }</div>
						<div className="card-body">
						<h5 className="card-title">{ e.title }</h5>
						<p className="card-text">{ e.descrip }</p>
					</div>

					<ButtonSpecial onClick ={ this.onClick }/>

				</div>
				)
			})
		)
	}
}
