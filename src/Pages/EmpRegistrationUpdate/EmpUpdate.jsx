// Edit.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, updateUser } from '../../Component/EmpRegistration/Action/Action';
import { useParams, useNavigate } from 'react-router-dom';

const EmpUpdate = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [address, setAddress] = useState('');
const [jobrole, setJobRol] = useState('');
const [department, setDepartment] = useState('');
const [doj, setDoj] = useState('');
const [empid, setEmpId] = useState('');
const [gender, setGender] = useState('');
  const dispatch = useDispatch();
  const nav = useNavigate();
  
  // Fetch user data by ID when the component mounts
  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  // Get user data from Redux store
  const userToUpdate = useSelector((state) => state.user);

  // Update local state when user data changes
  useEffect(() => {
    if (userToUpdate) {
      setName(userToUpdate.name); 
      setLastName(userToUpdate.lastname)
      setEmail(userToUpdate.email);
      setPhoneNumber(userToUpdate.phoneNumber);
      setAddress(userToUpdate.address);
      setJobRol(userToUpdate.jobrole);
      setDepartment(userToUpdate.department);    
      setDoj(userToUpdate.doj);
      setEmpId(userToUpdate.empid);
      setGender(userToUpdate.gender);
    }
  }, [userToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userToUpdate) {
      dispatch(updateUser(userToUpdate.id, {
        name,
        lastname,
        email,
        phoneNumber,
        address,
        jobrole,
        department,
        doj,
        empid,
        gender
      }));
      setName(''); 
      nav("/emptable");
    }
   
    // setName(''); 
 
  };

  return (
    <div className='whole-page'>
    {/* <form onSubmit={handleSubmit} className='Form-card-css'>
       
    <div className='inner-card'><div className='input-box'>
        <label htmlFor="">Name</label>
        <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /></div> 
        <div className='input-box'>
        <label htmlFor="">Email</label>
        <input
        type="text"
        placeholder="Name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /></div> 
    </div>
    <div className='inner-card'><div className='input-box'>
        <label htmlFor="">Phone Number</label>
        <input
        type="text"
        placeholder="Name"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      /></div> 
        <div className='input-box'>
        <label htmlFor="">Location</label>
        <input
        type="text"
        placeholder="Name"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      /></div> 
    </div>

    <div className='inner-card'><div className='input-box'>
        <label htmlFor="">Shop Name</label>
        <input
        type="text"
        placeholder="Name"
        value={shopName}
        onChange={(e) => setShopName(e.target.value)}
      /></div> 
        <div className='input-box'>
        <label htmlFor="">Food</label>
        <input
        type="text"
        placeholder="Name"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      /></div> 
    </div>

    <div className='inner-card'><div className='input-box'>
        <label htmlFor="">Description</label>
        <input
        type="text"
        placeholder="Name"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /></div> 
        <div className='input-box'>
        <label htmlFor="">Add on</label>
        <input
        type="text"
        placeholder="addOn"
        value={addOn}
        onChange={(e) => setAddOn(e.target.value)}
      /></div> 
    </div>

    <div className='inner-card'><div className='input-box'>
        <label htmlFor="">Quantity</label>
        <input
        type="text"
        placeholder="Name"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      /></div> 
        <div className='input-box'>
        <label htmlFor=""></label>
        <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /></div> 
    </div>
      <button type="submit">update User</button>
      </form> */}

<form onSubmit={handleSubmit} className='Form-card-css'>
       
       <div className='inner-card'><div className='input-box'>
           <label htmlFor="">Name</label>
           <input
           type="text"
           placeholder="Name"
           value={name}
           onChange={(e) => setName(e.target.value)}
         /></div> 
           <div className='input-box'>
           <label htmlFor="">Email</label>
           <input
           type="text"
           placeholder="Name"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         /></div> 
       </div>
       <div className='inner-card'><div className='input-box'>
           <label htmlFor="">Phone Number</label>
           <input
           type="text"
           placeholder="Name"
           value={phoneNumber}
           onChange={(e) => setPhoneNumber(e.target.value)}
         /></div> 
           <div className='input-box'>
           <label htmlFor="">Location</label>
           <input
           type="text"
           placeholder="Name"
           value={address}
           onChange={(e) => setAddress(e.target.value)}
         /></div> 
       </div>
   
       <div className='inner-card'><div className='input-box'>
           <label htmlFor="">Shop Name</label>
           <input
           type="text"
           placeholder="Name"
           value={jobrole}
           onChange={(e) => setJobRol(e.target.value)}
         /></div> 
           <div className='input-box'>
           <label htmlFor="">department</label>
           <input
           type="text"
           placeholder="Name"
           value={department}
           onChange={(e) => setDepartment(e.target.value)}
         /></div> 
       </div>
   
       <div className='inner-card'><div className='input-box'>
           <label htmlFor="">doj</label>
           <input
           type="text"
           placeholder="Name"
           value={doj}
           onChange={(e) => setDoj(e.target.value)}
         /></div> 
           <div className='input-box'>
           <label htmlFor="">empid</label>
           <input
           type="text"
           placeholder="addOn"
           value={empid}
           onChange={(e) => setEmpId(e.target.value)}
         /></div> 
       </div>
   
       <div className='inner-card'><div className='input-box'>
           <label htmlFor="">gender</label>
           <input
           type="text"
           placeholder="Name"
           value={gender}
           onChange={(e) => setGender(e.target.value)}
         /></div> 
           <div className='input-box'>
           <label htmlFor="">lastname</label>
           <input
           type="text"
           placeholder="Name"
           value={lastname}
           onChange={(e) => setLastName(e.target.value)}
         /></div> 
       </div>
         <button type="submit">Add User</button>
             </form>
    </div>
  );
};

export default EmpUpdate;