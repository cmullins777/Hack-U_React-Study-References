import React from "react";

export default class Button extends React.Component {
  render() {
      return (
      <div>
        <button onClick={this.props.handleClick.bind(this)}/>
      </div>
    );
  }
}

