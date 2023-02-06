import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./allStyles.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    staffId: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(values);
    console.log(Object.fromEntries(data.entries()));

    axios.post("http://localhost:8081/api/user/login", values).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("id", res.data.staffId);
        navigate("/home");
      }
    });
  };

  return (
    <div className='login-form'>
      <form onSubmit={submitForm}>
        <div className='mb-3'>
          <label htmlFor='staffId' className='form-label'>
            Email address
          </label>
          <input
            type='text'
            name='staffId'
            onChange={onChange}
            className='form-control'
            id='staffId'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            name='password'
            onChange={onChange}
            type='password'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
