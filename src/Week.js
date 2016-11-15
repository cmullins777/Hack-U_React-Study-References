import React from "react";


export default class Week extends React.Component {
  handleChange(e) {
    const content = e.target.value;
    this.props.update(content);
  }

  render() {
  const week1 = this.state.week1.map((hw, i) =>(
     (this.state.week1[i].title) + (this.state.week1[i].link));


    return (
      <div>
       <div>
        <li>
         {this.props.week1}
         {this.props.week2}
         {this.props.week3}
        </li>
       </div>
      </div>
    );
  }
}
