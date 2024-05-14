import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../Component/EmpRegistration/Action/Action";
import { useNavigate } from "react-router-dom";
import "./EmpForm.css";

const EmpForm = () => {
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

  const dispatch = useDispatch();
  const nav = useNavigate();


const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      await dispatch(
        createUser({
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
      setEmail("");
      setLastName("");
      setPhoneNumber("");
      setAddress("");
      setJobRol("");
      setDepartment("");
      setDoj("");
      setEmpId("");
      setGender("");
      nav("/emptable");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); 
    }
  };
  return (
    <div className="container-fluid  empform empform-container">
       
      <form onSubmit={handleSubmit} className="Form-card-css w-50 p-3">
      {/* <div className="spinner-container" style={{ display: isLoading ? "flex" : "none" }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div> */}
         <div id="loading-indicator" style={{ display: isLoading ? "flex" : "none" }}>
      <div className="lds-hourglass">
      </div>
        </div>
       
        <div className=" d-flex empform-outer">
          <div className="col-md-5 me-3 m-2">
            <label  className="fw-bold empform-lable">
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
            <label  className="fw-bold empform-lable">
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
            <label  className="fw-bold empform-lable">
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
            <label  className="fw-bold empform-lable">
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
  <label  className="fw-bold empform-lable">
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
  <label  className="fw-bold empform-lable">
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
            <label  className="fw-bold empform-lable">
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
  <label  className="fw-bold empform-lable">
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
            <label  className="fw-bold empform-lable">
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
  <label  className="fw-bold empform-lable">
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
          <button className="btn btn-primary" type="submit" >Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmpForm;
