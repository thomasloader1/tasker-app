import React, { Component, Fragment } from 'react'

export default class Task extends Component {
	render() {
		return (
			 (props)=>{ props.task.map(e =>{
			 	return(
			 		<Fragment>
			 	<div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
		  <div className="card-header">{ e.title }</div>
			  <div className="card-body">
			    <h5 className="card-title">Primary card title</h5>
			    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			  </div>

					<div className="btn-group" role="group" aria-label="Button group with nested dropdown">
					  <button type="button" className="btn btn-secondary">Modificar</button>
					  <button type="button" className="btn btn-secondary">Borrar</button>

					  <div className="btn-group" role="group">
					    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					      Estado
					    </button>
					    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
					      <a className="dropdown-item" href="#">Con Problema</a>
					      <a className="dropdown-item" href="#">En espera</a>
					      <a className="dropdown-item" href="#">En produccion</a>
					      <a className="dropdown-item" href="#">....</a>
					    </div>
					  </div>
					</div> 

		  </div>
		  </Fragment>
			 )})}
			 )
	}

}