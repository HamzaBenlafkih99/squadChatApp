import React, { Component } from 'react'
import './css/index.css'; 
export default class Button extends Component 
{
    render() {
        const {ButtonName} = this.props;
        return (
            <div>
                <button className = "Button"><i className=""></i> {ButtonName}</button> 
            </div>
        )
    }
}
