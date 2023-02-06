import React, { useState } from "react";
import axios from "axios";

function Generate() {
  const [numberOfForms, setNumberOfForms] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    const obj = { num: +numberOfForms, id: localStorage.getItem("id") };

    console.log(obj);

    axios
      .post("http://localhost:8081/api/generate", obj)
      .then((res) => console.log(res));
  };

  return (
    <div className='login-form'>
      <form onSubmit={submitForm}>
        <div className='mb-3'>
          <label htmlFor='form-number' className='form-label'>
            Select the Form to Print
          </label>
          <select className='form-select' aria-label='Default select example'>
            <option defaultValue={1}>---select form---</option>
            <option value='1'>Harvest Form - Hausa</option>
            <option value='2'>Harvest Form - English</option>
            <option value='3'>Transport Receipt - Hausa</option>
            <option value='3'>Transport Reciept - English</option>
            <option value='3'>Transport Reciept - English</option>
            <option value='3'>Transport Reciept - Hausa</option>
          </select>

          <label htmlFor='form-number' className='form-label'>
            Number of Forms
          </label>
          <input
            type='number'
            name='numberOfForms'
            value={numberOfForms}
            onChange={(e) => {
              e.preventDefault();
              setNumberOfForms(e.target.value);
            }}
            className='form-control'
            id='numberOfForms'
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Generate;
