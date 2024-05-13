
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../Component/EmpRegistration/Action/Action';
import { useNavigate } from 'react-router-dom';

const EmpForm = ({ addItem }) => {
  const [name, setName] = useState('');
  
const navigate = useNavigate()
  const onSubmit = e => {
    e.preventDefault();
    addItem(name);
    setName('');
    navigate("/emptable")
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter Item Name"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default connect(null, { addItem })(EmpForm);
