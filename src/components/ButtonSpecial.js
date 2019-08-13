import React, { Component } from 'react'

export default class ButtonSpecial extends Component {
    render() {
        return (
        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button type="button" className="btn btn-secondary">Modificar</button>
            <button type="button"  className="btn btn-secondary">Borrar</button>

            <div className="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Estado
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" name="espera" onChange={this.props.onChange} href="#">Con Problema</a>
                <a className="dropdown-item" href="#">En espera</a>
                <a className="dropdown-item" name="salio mal" onChange={console.log("ea")} href="#">En produccion</a>
            </div>
            </div>
        </div> 
        )
    }
}
