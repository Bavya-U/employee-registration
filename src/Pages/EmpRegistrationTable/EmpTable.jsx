import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../Component/EmpRegistration/Action/Action';
import { Link } from 'react-router-dom';

const EmpTable = ({ items, getItems, deleteItem }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <div>
      {items && items.length > 0 ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name}{' '}
              <button onClick={() => deleteItem(item.id)}>Delete</button>
              <Link to={`/update/${item.id}`}>Edit</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items 
});

export default connect(mapStateToProps, { getItems, deleteItem })(EmpTable);
