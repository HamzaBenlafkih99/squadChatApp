import React, {Component} from "react";
import "./SuggestionsButton.css";
export default class SuggestionsButton extends Component {
  render() {
    const {suggestionName} = this.props;
    return (
      <div>
        <button className="suggestionName">{suggestionName}</button>
      </div>
    );
  }
}
