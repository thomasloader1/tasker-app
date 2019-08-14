import React, { Component } from 'react'

export default class ButtonSpecial extends Component {

    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'Baja'
        }
    }

     handleInput = (e)=>{
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
        <div className="form-group">
                <select name="priority" className="form-control" onChange={this.handleInput}>
                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Alta">Alta</option>
                </select>
        </div> 
        )
    }
}
