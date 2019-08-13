import React, { Component, Fragment } from 'react'
import ButtonSpecial from "./ButtonSpecial";
export default class Task extends Component {
	state={
		color: "card text-white bg-primary mb-3"
	}

	onChange=(e)=>{
		if (e.taget.name="espera"){
			this.setState({color:"card text-white bg-primary mb-3"})
		}else if (e.taget.name="salio mal") {
			this.setState({color:"card text-white bg-danger mb-3"})

		}
	}

	render() {
		const { task } = this.props;
		return (
			task.map( e =>{
				return(
				<div className={this.state.color} style={{maxWidth: '18rem'}}>
					<div className="card-header">{ e.id }</div>
						<div className="card-body">
						<h5 className="card-title">{ e.title }</h5>
						<p className="card-text">{ e.descrip }</p>
					</div>

					<ButtonSpecial onChange ={ this.onChange }/>

				</div>
				)
			})
		)
	}
}
