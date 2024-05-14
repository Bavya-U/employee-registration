// List.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../../Component/EmpRegistration/Action/Action';

const EmpTable = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name:{user.name}</p>
            <p>LastNAme{user.lastname}</p>
            <p>Email:{user.email}</p>
            <p>PhoneNumber:{user.phoneNumber}</p>
            <p>Address:{user.address}</p>
            <p>Jobrole:{user.jobrole}</p>
            <p>Department{user.department}</p>
            <p>Date Of Join:{user.doj}</p>
            <p>EmpID:{user.empid}</p>
            <p>Gender:{user.gender}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            <Link to={`/form/${user.id}/edit`}>Edit</Link>
         </li>
        ))}
      </ul>
    </div>
  );
};

export default EmpTable;
