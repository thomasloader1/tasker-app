import React, { Component, Fragment } from 'react'

export default class Tasks extends Component {
	render() {
		return (
		<div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
		  <div className="card-header">Header</div>
			  <div className="card-body">
			    <h5 className="card-title">Primary card title</h5>
			    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			  </div>

					<div className="btn-group" role="group" aria-label="Button group with nested dropdown">
					  <button type="button" className="btn btn-secondary">Modificar</button>
					  <button type="button" className="btn btn-secondary">Borrar</button>

					  <div className="btn-group" role="group">
					    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					      Dropdown
					    </button>
					    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
					      <a className="dropdown-item" href="#">Dropdown link</a>
					      <a className="dropdown-item" href="#">Dropdown link</a>
					    </div>
					  </div>
					</div>

		  </div>
		)
	}
}