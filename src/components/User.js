import React from 'react';

export default class User extends React.Component{
  render() {
    return (
      <div>
        <img src={this.props.avatar} className="avatar"/>
        <div className="username">
          {this.props.firstname}{this.props.lastname}
        </div>
      </div>
    )  
  }
}