import React, {Component} from "react";
import "./ButtonProfil.css";
export default class ButtonProfil extends Component {
  render() {
    const {Label} = this.props;
    return (
      <div>
        <button className="buttonProfil">{Label}</button>
      </div>
    );
  }
}
