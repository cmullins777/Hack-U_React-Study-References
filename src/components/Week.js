import React from "react";

export default class Week extends React.Component {

  render() {

    return (
       <div>
          {this.props.cat.map((hw, i) =>
          <li key={i}><a href={hw.link} target="blank">{hw.title}</a></li>
         )}
       </div>
    );
  }
}

/*  this.state = {value: ''};
    this.addTitle = this.addTitle.bind(this);
    this.addLink = this.addLink.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

{isToggleOn: true};

{isToggleOn: true};
    handleClick() {
      this.handleClick = this.handleClick.bind(this);
      this.setState (prevState => ({
        isToggleOn: !prevState.isToggleOn
     }));
    }
<button onClick={this.handleClick.bind(this)}>
        {this.state.isToggleOn ? "ON" : "OFF"}</button>
*/
