import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../Component/EmpRegistration/Action/Action';
import { useNavigate } from 'react-router-dom';

const EmpForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ 
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
      setEmail('');
      setLastName('');
    setPhoneNumber('');
    setAddress('');
    setJobRol('');
    setDepartment('');
    setDoj('');
    setEmpId('');
    setGender('');
    nav("/emptable");
  };

  return (
    <div className='whole-page'>
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

export default EmpForm;