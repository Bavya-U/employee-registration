// // Edit.js
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser, updateUser } from '../../Component/EmpRegistration/Action/Action';
// import { useParams, useNavigate } from 'react-router-dom';
// import "./EmpUpdate.css"
// const EmpUpdate = () => {
//   const { id } = useParams();
//   const [name, setName] = useState('');
//   const [lastname, setLastName] = useState('');
// const [email, setEmail] = useState('');
// const [phoneNumber, setPhoneNumber] = useState('');
// const [address, setAddress] = useState('');
// const [jobrole, setJobRol] = useState('');
// const [department, setDepartment] = useState('');
// const [doj, setDoj] = useState('');
// const [empid, setEmpId] = useState('');
//   const [gender, setGender] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
  
//   const dispatch = useDispatch();
//   const nav = useNavigate();
  
  
//   useEffect(() => {
//     dispatch(fetchUser(id));
//   }, [dispatch, id]);


//   const userToUpdate = useSelector((state) => state.user);

  
//   useEffect(() => {
//     if (userToUpdate) {
//       setName(userToUpdate.name);
//       setLastName(userToUpdate.lastname)
//       setEmail(userToUpdate.email);
//       setPhoneNumber(userToUpdate.phoneNumber);
//       setAddress(userToUpdate.address);
//       setJobRol(userToUpdate.jobrole);
//       setDepartment(userToUpdate.department);
//       setDoj(userToUpdate.doj);
//       setEmpId(userToUpdate.empid);
//       setGender(userToUpdate.gender);
//     }
//   }, [userToUpdate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       if (userToUpdate) {
//         dispatch(updateUser(userToUpdate.id, {
//           name,
//           lastname,
//           email,
//           phoneNumber,
//           address,
//           jobrole,
//           department,
//           doj,
//           empid,
//           gender
//         }));
//         setName('');
//         setEmail("");
//         setLastName("");
//         setPhoneNumber("");
//         setAddress("");
//         setJobRol("");
//         setDepartment("");
//         setDoj("");
//         setEmpId("");
//         setGender("");
//         nav("/emptable");
//       }
//     }catch (error) {
//       console.error("Error:", error);
//       // Handle error if needed
//     } finally {
//       setIsLoading(false); // Set loading state to false when API request completes
//     }
   
   
 
//   };

//   return (
//     <div className='container  empform  mt-2 '>
//        <form onSubmit={handleSubmit} className="Form-card-css card border-0 shadow-lg w-50 p-3">
//         <div className=" d-flex empform-outer">
//           <div className="col-md-5 me-3 m-2">
//             <label  className="fw-bold">
//               Emp Code <span className="text-danger">*</span> :
//             </label>
//             <input
//               type="number"
//               className="form-control empform-inner"
//               required
//               placeholder="Enter Emp Code"
//               value={empid}
//                           onChange={(e) => setEmpId(e.target.value)}
                       
//             />
//           </div>
//           <div className="col-md-5 ms-3 m-2">
//             <label  className="fw-bold">
//               FirstName <span className="text-danger">*</span> :
//             </label>
//             <input
//               type="text"
//               className="form-control empform-inner"
//               required
//               placeholder="Enter FirstName"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="d-flex empform-outer">
//           <div className="col-md-5 me-3 m-2">
//             <label  className="fw-bold">
//               LastName <span className="text-danger">*</span> :
//             </label>
//             <input
//               type="text"
//               className="form-control empform-inner"
//               required
//               placeholder="Enter LastName"
//               value={lastname}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>

//           <div className="col-md-5 ms-3 m-2">
//             <label  className="fw-bold">
//               Email <span className="text-danger">*</span> :
//             </label>
//             <input
//               type="text"
//               className="form-control empform-inner"
//               required
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="d-flex empform-outer">
//         <div className="col-md-5 me-3 m-2">
//   <label  className="fw-bold">
//     Role <span className="text-danger">*</span> :
//   </label>
//   <select
//     className="form-select empform-inner"
//     value={jobrole}
//     onChange={(e) => setJobRol(e.target.value)}
//   >
//     <option value="">Select Role</option>
//     <option value="Manager">Manager</option>
//     <option value="Developer">Developer</option>
//     <option value="Designer">Designer</option>
//   </select>
// </div>

//                   <div className="col-md-5 ms-3 m-2">
//   <label  className="fw-bold">
//     Department <span className="text-danger">*</span> :
//   </label>
//   <select
//     className="form-select empform-inner"
//     value={department}
//     onChange={(e) => setDepartment(e.target.value)}
//   >
//     <option value="">Select Department</option>
//     <option value="IT">IT</option>
//     <option value="HR">HR</option>
//     <option value="Finance">Finance</option>
   
//   </select>
// </div>

//         </div>

//         <div className="d-flex empform-outer">
//           <div className="col-md-5 me-3 m-2">
//             <label  className="fw-bold">
//               Date Of Birth <span className="text-danger">*</span> :
//             </label>
//             <input
//               type="date"
//               className="form-control empform-inner"
//               required
//               placeholder="Enter Date Of Birth"
//               value={doj}
//               onChange={(e) => setDoj(e.target.value)}
//             />
//           </div>
//                   <div className="col-md-5 ms-3 m-2">
//   <label  className="fw-bold">
//     Gender <span className="text-danger">*</span> :
//   </label>
//   <select
//     className="form-select empform-inner"
//     value={gender}
//     onChange={(e) => setGender(e.target.value)}
//   >
//     <option value="">Select Gender</option>
//     <option value="male">Male</option>
//     <option value="female">Female</option>
//     <option value="other">Other</option>
//   </select>
// </div>

//         </div>

//         <div className=" empform-outer">
//           <div className="col-md-5 me-3 m-2 ">
//             <label  className="fw-bold">
//               Phone Number <span className="text-danger">*</span> :
//             </label>
//             <input
//               type="number"
//               className="form-control empform-inner"
//               required
//               placeholder="Enter Phone Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//           </div>
//           <div className="col-md-5 ms-3 m-2">
//   <label  className="fw-bold">
//     Address <span className="text-danger">*</span> :
//   </label>
//   <textarea
//     className="form-control empform-inner"
//     required
//     placeholder="Enter Address"
//     value={address}
//     onChange={(e) => setAddress(e.target.value)}
//     rows={4}
//   />
// </div>

//         </div>
//         {/* <div className="empfrom-btn mt-2">
//           <button className="btn btn-primary" type="submit">
//             Add User
//           </button>
//         </div> */}

// <div className="empfrom-btn mt-2">
//           <button className="btn btn-primary" type="submit" disabled={isLoading}>
//             {isLoading ? (
//               <div className="spinner-border text-light" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             ) : (
//               "Update User"
//             )}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EmpUpdate;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, updateUser } from '../../Component/EmpRegistration/Action/Action';
import { useParams, useNavigate } from 'react-router-dom';
import "./EmpUpdate.css"

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
  const [isLoading, setIsLoading] = useState(false); 
  
  const dispatch = useDispatch();
  const nav = useNavigate();
  
  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  const userToUpdate = useSelector((state) => state.user);
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true before API call

    try {
      if (userToUpdate) {
        await dispatch(updateUser(userToUpdate.id, {
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
        
        // Clear form fields after successful update
        setName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setAddress('');
        setJobRol('');
        setDepartment('');
        setDoj('');
        setEmpId('');
        setGender('');
        
        nav("/emptable");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error if needed
    } finally {
      setIsLoading(false); // Set loading state to false after API call completes
    }
  };

  return (
    <div className='container  empform  mt-2 '>
      <form onSubmit={handleSubmit} className="Form-card-css card border-0 shadow-lg w-50 p-3">
      <div className=" d-flex empform-outer">
           <div className="col-md-5 me-3 m-2">
             <label  className="fw-bold">
               Emp Code <span className="text-danger">*</span> :
             </label>
             <input
               type="number"
               className="form-control empform-inner"
               required
               placeholder="Enter Emp Code"
               value={empid}
                           onChange={(e) => setEmpId(e.target.value)}
                       
             />
           </div>
           <div className="col-md-5 ms-3 m-2">
             <label  className="fw-bold">
               FirstName <span className="text-danger">*</span> :
             </label>
             <input
               type="text"
               className="form-control empform-inner"
               required
               placeholder="Enter FirstName"
               value={name}
               onChange={(e) => setName(e.target.value)}
             />
           </div>
         </div>
         <div className="d-flex empform-outer">
           <div className="col-md-5 me-3 m-2">
             <label  className="fw-bold">
               LastName <span className="text-danger">*</span> :
             </label>
             <input
               type="text"
               className="form-control empform-inner"
               required
               placeholder="Enter LastName"
               value={lastname}
               onChange={(e) => setLastName(e.target.value)}
             />
           </div>

           <div className="col-md-5 ms-3 m-2">
             <label  className="fw-bold">
               Email <span className="text-danger">*</span> :
             </label>
             <input
               type="text"
               className="form-control empform-inner"
               required
               placeholder="Enter Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
           </div>
         </div>

         <div className="d-flex empform-outer">
         <div className="col-md-5 me-3 m-2">
   <label  className="fw-bold">
     Role <span className="text-danger">*</span> :
   </label>
   <select
     className="form-select empform-inner"
     value={jobrole}
     onChange={(e) => setJobRol(e.target.value)}
   >
     <option value="">Select Role</option>
     <option value="Manager">Manager</option>
     <option value="Developer">Developer</option>
     <option value="Designer">Designer</option>
   </select>
 </div>

                   <div className="col-md-5 ms-3 m-2">
   <label  className="fw-bold">
     Department <span className="text-danger">*</span> :
   </label>
   <select
     className="form-select empform-inner"
     value={department}
     onChange={(e) => setDepartment(e.target.value)}
   >
     <option value="">Select Department</option>
     <option value="IT">IT</option>
     <option value="HR">HR</option>
     <option value="Finance">Finance</option>
   
   </select>
 </div>

         </div>

         <div className="d-flex empform-outer">
           <div className="col-md-5 me-3 m-2">
             <label  className="fw-bold">
               Date Of Birth <span className="text-danger">*</span> :
             </label>
             <input
               type="date"
               className="form-control empform-inner"
               required
               placeholder="Enter Date Of Birth"
               value={doj}
               onChange={(e) => setDoj(e.target.value)}
             />
           </div>
                   <div className="col-md-5 ms-3 m-2">
   <label  className="fw-bold">
     Gender <span className="text-danger">*</span> :
   </label>
   <select
     className="form-select empform-inner"
     value={gender}
     onChange={(e) => setGender(e.target.value)}
   >
     <option value="">Select Gender</option>
     <option value="male">Male</option>
     <option value="female">Female</option>
     <option value="other">Other</option>
   </select>
 </div>

         </div>

         <div className=" empform-outer">
           <div className="col-md-5 me-3 m-2 ">
             <label  className="fw-bold">
               Phone Number <span className="text-danger">*</span> :
             </label>
             <input
               type="number"
               className="form-control empform-inner"
               required
               placeholder="Enter Phone Number"
               value={phoneNumber}
               onChange={(e) => setPhoneNumber(e.target.value)}
             />
           </div>
           <div className="col-md-5 ms-3 m-2">
   <label  className="fw-bold">
     Address <span className="text-danger">*</span> :
   </label>
   <textarea
     className="form-control empform-inner"
     required
     placeholder="Enter Address"
     value={address}
     onChange={(e) => setAddress(e.target.value)}
     rows={4}
   />
 </div>

         </div>
        <div className="empfrom-btn mt-2">
          <button className="btn btn-primary" type="submit" disabled={isLoading}>
            {isLoading ? (
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Update User"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmpUpdate;
