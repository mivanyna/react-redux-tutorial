import React, {PropTypes} from 'react';

const UserList = ({users}) => {
  return (
    <ul className="list-group">
      {users.map(
        user => 
          <li className="list-group-item" key={user.id}>
            <img src={user.avatar} className="avatar"/>
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