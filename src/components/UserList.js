import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const UserList = ({users}) => {
  return (
    <ul className="list-group">
      {users.map(
        user => 
          <li className="list-group-item" key={user.id}>
            <Link to={'/users/' + user.id}>
                <img src={user.avatar} className="avatar"/>
            </Link>
            {user.first_name} {user.last_name}
          </li>
      )}
    </ul>
  )
}

UserList.propTypes = {  
  users: PropTypes.array.isRequired
};

export default UserList;