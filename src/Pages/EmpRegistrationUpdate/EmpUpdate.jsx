import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUser,
  updateUser,
} from "../../Component/EmpRegistration/Action/Action";
import { useParams, useNavigate } from "react-router-dom";
import "./EmpUpdate.css";

const EmpUpdate = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [jobrole, setJobRol] = useState("");
  const [department, setDepartment] = useState("");
  const [doj, setDoj] = useState("");
  const [empid, setEmpId] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});


  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  const userToUpdate = useSelector((state) => state.user);

  useEffect(() => {
    if (userToUpdate) {
      setName(userToUpdate.name);
      setLastName(userToUpdate.lastname);
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

  const validate = () => {
    const newErrors = {};
    if (!/^\d+$/.test(empid)) newErrors.empid = "Employee ID must be a number.";
    if (!/^[a-zA-Z]+$/.test(name)) newErrors.name = "First name must contain only letters.";
    if (!/^[a-zA-Z]+$/.test(lastname)) newErrors.lastname = "Last name must contain only letters.";
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) newErrors.email = "Email must be a valid Gmail address.";
    if (!/^\d{10}$/.test(phoneNumber)) newErrors.phoneNumber = "Phone number must be 10 digits long.";
    if (!department) newErrors.department = "Please select a department.";
    if (!jobrole) newErrors.jobrole = "Please select a job role.";
    if (!gender) newErrors.gender = "Please select a gender.";
    if (!doj) newErrors.doj = "Please include Date of Birth.";
    if (!address) newErrors.address = "Please include Address.";


    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsLoading(true);

    try {
      if (userToUpdate) {
        await dispatch(
          updateUser(userToUpdate.id, {
            name,
            lastname,
            email,
            phoneNumber,
            address,
            jobrole,
            department,
            doj,
            empid,
            gender,
          })
        );
        setName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setAddress("");
        setJobRol("");
        setDepartment("");
        setDoj("");
        setEmpId("");
        setGender("");

        nav("/employee/view");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <div className="container-fluid  empform empform-container">
      
    //   <form onSubmit={handleSubmit} className="Form-card-css shadow-lg w-50 m-3 p-2">
    //   <h4 className="fw-bold text-secondary p-2  ps-5">Create Employee</h4>
    //     <div
    //       id="loading-indicator"
    //       style={{ display: isLoading ? "flex" : "none" }}
    //     >
    //       <div className="lds-hourglass"></div>
    //     </div>
    //     <div className=" d-flex empform-outer">
    //       <div className="col-md-5 me-3 m-2">
    //         <label className="fw-bold empform-lable">
    //           Emp Code <span className="text-danger">*</span> :
    //         </label>
    //         <input
    //           type="number"
    //           className="form-control empform-inner"
    //           required
    //           placeholder="Enter Emp Code"
    //           value={empid}
    //           onChange={(e) => setEmpId(e.target.value)}
    //         />
    //       </div>
    //       <div className="col-md-5 ms-3 m-2">
    //         <label className="fw-bold empform-lable">
    //           FirstName <span className="text-danger">*</span> :
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control empform-inner"
    //           required
    //           placeholder="Enter FirstName"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //         />
    //       </div>
    //     </div>
    //     <div className="d-flex empform-outer">
    //       <div className="col-md-5 me-3 m-2">
    //         <label className="fw-bold empform-lable">
    //           LastName <span className="text-danger">*</span> :
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control empform-inner"
    //           required
    //           placeholder="Enter LastName"
    //           value={lastname}
    //           onChange={(e) => setLastName(e.target.value)}
    //         />
    //       </div>

    //       <div className="col-md-5 ms-3 m-2">
    //         <label className="fw-bold empform-lable">
    //           Email <span className="text-danger">*</span> :
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control empform-inner"
    //           required
    //           placeholder="Enter Email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //     </div>

    //     <div className="d-flex empform-outer">
    //       <div className="col-md-5 me-3 m-2">
    //         <label className="fw-bold empform-lable">
    //           Department <span className="text-danger">*</span> :
    //         </label>
    //         <select
    //           className="form-select empform-inner"
    //           value={department}
    //           onChange={(e) => setDepartment(e.target.value)}
    //         >
    //           <option value="">Select Department</option>
    //           <option value="IT">IT</option>
    //           <option value="HR">HR</option>
    //           <option value="Finance">Finance</option>
    //           <option value="Data Science">Data Science</option>
    //           <option value="Networks">Networks</option>
    //         </select>
    //       </div>

    //       <div className="col-md-5 ms-3 m-2">
    //         <label className="fw-bold empform-lable">
    //           Role <span className="text-danger">*</span> :
    //         </label>
    //         <select
    //           className="form-select empform-inner"
    //           value={jobrole}
    //           onChange={(e) => setJobRol(e.target.value)}
    //         >
    //           <option value="">Select Role</option>
    //           <option value="Manager">Manager</option>
    //           <option value="Developer">Developer</option>
    //           <option value="Designer">Designer</option>
    //         </select>
    //       </div>
    //     </div>

    //     <div className="d-flex empform-outer">
    //       <div className="col-md-5 me-3 m-2">
    //         <label className="fw-bold empform-lable">
    //           Date Of Birth <span className="text-danger">*</span> :
    //         </label>
    //         <input
    //           type="date"
    //           className="form-control empform-inner"
    //           required
    //           placeholder="Enter Date Of Birth"
    //           value={doj}
    //           onChange={(e) => setDoj(e.target.value)}
    //         />
    //       </div>
    //       <div className="col-md-5 ms-3 m-2">
    //         <label className="fw-bold empform-lable">
    //           Gender <span className="text-danger">*</span> :
    //         </label>
    //         <select
    //           className="form-select empform-inner"
    //           value={gender}
    //           onChange={(e) => setGender(e.target.value)}
    //         >
    //           <option value="">Select Gender</option>
    //           <option value="male">Male</option>
    //           <option value="female">Female</option>
    //           <option value="other">Other</option>
    //         </select>
    //       </div>
    //     </div>

    //     <div className=" empform-outer">
    //       <div className="col-md-5 me-3 m-2 ">
    //         <label className="fw-bold empform-lable">
    //           Phone Number <span className="text-danger">*</span> :
    //         </label>
    //         <input
    //           type="number"
    //           className="form-control empform-inner"
    //           required
    //           placeholder="Enter Phone Number"
    //           value={phoneNumber}
    //           onChange={(e) => setPhoneNumber(e.target.value)}
    //         />
    //       </div>
    //       <div className="col-md-5 ms-3 m-2">
    //         <label className="fw-bold empform-lable">
    //           Address <span className="text-danger">*</span> :
    //         </label>
    //         <textarea
    //           className="form-control empform-inner"
    //           required
    //           placeholder="Enter Address"
    //           value={address} 
    //           onChange={(e) => setAddress(e.target.value)}
    //           rows={2}
    //         />
    //       </div>
    //     </div>

    //     <div className="empfrom-btn mt-2">
    //     {/* <button className="btn btn-secondary me-3" onClick={resetForm} type="submit">
    //         Reset
    //       </button> */}
    //       <button className="btn btn-primary" type="submit">
    //         Update
    //       </button>
    //     </div>
    //   </form>
    // </div>
    
    <div className="container-fluid empform empform-container">
    <form onSubmit={handleSubmit} className="Form-card-css shadow-lg w-50 m-3 p-2">
      <h4 className="fw-bold text-secondary p-2 ps-5">Update Employee</h4>
      <div id="loading-indicator" style={{ display: isLoading ? "flex" : "none" }}>
        <div className="lds-hourglass"></div>
      </div>
      <div className="d-flex empform-outer">
        <div className="col-md-5 me-3 m-1">
          <label className="fw-bold empform-label">
            Emp Code <span className="text-danger">*</span> :
          </label>
          <input
            type="number"
            className="form-control empform-inner"
            placeholder="Enter Emp Code"
            value={empid}
            onChange={(e) => setEmpId(e.target.value)}
          />
          {errors.empid && <span className="text-danger">{errors.empid}</span>}
        </div>
        <div className="col-md-5 ms-3 m-1">
          <label className="fw-bold empform-label">
            First Name <span className="text-danger">*</span> :
          </label>
          <input
            type="text"
            className="form-control empform-inner"
            placeholder="Enter First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </div>
      </div>
      <div className="d-flex empform-outer">
        <div className="col-md-5 me-3 m-1">
          <label className="fw-bold empform-label">
            Last Name <span className="text-danger">*</span> :
          </label>
          <input
            type="text"
            className="form-control empform-inner"
            placeholder="Enter Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastname && <span className="text-danger">{errors.lastname}</span>}
        </div>
        <div className="col-md-5 ms-3 m-1">
          <label className="fw-bold empform-label">
            Email <span className="text-danger">*</span> :
          </label>
          <input
            type="text"
            className="form-control empform-inner"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
      </div>
      <div className="d-flex empform-outer">
        <div className="col-md-5 me-3 m-1">
          <label className="fw-bold empform-label">
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
            <option value="Data Science">Data Science</option>
            <option value="Networks">Networks</option>
          </select>
          {errors.department && <span className="text-danger">{errors.department}</span>}
        </div>
        <div className="col-md-5 ms-3 m-1">
          <label className="fw-bold empform-label">
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
          {errors.jobrole && <span className="text-danger">{errors.jobrole}</span>}
        </div>
      </div>
      <div className="d-flex empform-outer">
        <div className="col-md-5 me-3 m-1">
          <label className="fw-bold empform-label">
            Date Of Birth <span className="text-danger">*</span> :
          </label>
          <input
            type="date"
            className="form-control empform-inner"
            value={doj}
            onChange={(e) => setDoj(e.target.value)}
          />
          {errors.doj && <span className="text-danger">{errors.doj}</span>}

        </div>
        <div className="col-md-5 ms-3 m-1">
          <label className="fw-bold empform-label">
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
          {errors.gender && <span className="text-danger">{errors.gender}</span>}
        </div>
      </div>
      <div className="empform-outer">
        <div className="col-md-5 me-3 m-1">
          <label className="fw-bold empform-label">
            Phone Number <span className="text-danger">*</span> :
          </label>
          <input
            type="number"
            className="form-control empform-inner"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber}</span>}
        </div>
        <div className="col-md-5 ms-3 m-1">
          <label className="fw-bold empform-label">
            Address <span className="text-danger">*</span> :
          </label>
          <textarea
            className="form-control empform-inner"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={3}
          />
          {errors.address && <span className="text-danger">{errors.address}</span>}

        </div>
      </div>
      <div className="empfrom-btn mt-2">
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </div>
    </form>
  </div>
  );
};

export default EmpUpdate;
