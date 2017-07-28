import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class User extends React.Component {
  render() {
     return (
          <div className="col-xs-8 col-xs-offset-2"> 
            <h2>{this.props.user.first_name} {this.props.user.last_name}</h2>
            <img src={this.props.user.avatar} />
          </div>
       )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
}


function mapStateToProps(state, ownProps) {
  let user = {};
  const userId = ownProps.params.id;
  const users = state.user.users;
  if (users.length){
    user = Object.assign({}, users.find(user => user.id == userId))
  }
  return {
    user: user
  }
}

export default connect(mapStateToProps)(User);