import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getItemById, updateItem } from '../../Component/EmpRegistration/Action/Action';
import { useNavigate, useParams } from 'react-router-dom';

const EmpUpdate = ({ getItemById, updateItem, item }) => {
  const [formData, setFormData] = useState({
    name: ''
  });

  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getItemById(id); 
    }
  }, [getItemById, id]);

  useEffect(() => {
    if (item && item.name) {
      setFormData({ ...formData, name: item.name });
    }
  }, [item]);

  const onSubmit = e => {
    e.preventDefault();
    updateItem(id, formData);
    navigate("/emptable");
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={onChange}
        placeholder="Enter Item Name"
      />
      <button type="submit">Update Item</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  item: state.item 
});

export default connect(mapStateToProps, { getItemById, updateItem })(EmpUpdate);
