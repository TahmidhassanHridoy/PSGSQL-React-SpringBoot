import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

let navegate=useNavigate();

const [user,setUsers]= useState({
  name:"",
  email:"",
  username:"",
  department:""
});

const {name,username,email,department}=user

const onInputChange = (e) => {
   setUsers({...user,[e.target.name]:e.target.value }); 

};

const onSubmit =async (e) => {
    e.preventDefault();   
    await axios.post("http://localhost:5050/user",user)
    navegate("/")
};

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="floatingInput" placeholder="Name" name='name' value={name} onChange={(e)=>onInputChange(e)} />
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-2">
              <input type="email" class="form-control" id="floatingInput" placeholder="Email" name='email' value={email} onChange={(e)=>onInputChange(e)} />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-2">
              <input type="username" class="form-control" id="floatingInput" placeholder="Username" name='username' value={username} onChange={(e)=>onInputChange(e)} />
              <label for="floatingInput">UserName</label>
            </div>
            <div class="form-floating mb-2">
              <input type="username" class="form-control" id="floatingInput" placeholder="Depeartment" name='department' value={department} onChange={(e)=>onInputChange(e)} />
              <label for="floatingInput">Department</label>
            </div>
            <button type="submit" class="btn btn-outline-primary">Submit</button>
            <Link type="submit" class="btn btn-outline-danger mx-2" to="/ ">Cancel</Link>
            </form>
        </div>
      </div>
    </div>
  )
}
