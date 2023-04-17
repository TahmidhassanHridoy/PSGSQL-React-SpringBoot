import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

let navegate=useNavigate();

const {id}=useParams()

const [user,setUsers]= useState({
  name:"",
  email:"",
  username:"",
  dept:""
});

const {name,username,email,dept}=user

const onInputChange = (e) => {
   setUsers({...user,[e.target.name]:e.target.value }); 

};

useEffect(()=>{
    loadUsers()
},[])


const onSubmit =async (e) => {
    e.preventDefault();   
    await axios.put(`http://localhost:5050/user/${id}`, user);
    navegate("/");
};

const loadUsers=async()=>{
    const result=await axios.get(`http://localhost:5050/user/${id}`, user)
    setUsers(result.data)
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <h2 className="text-center m-4">Edit User</h2>
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
              <input type="username" class="form-control" id="floatingInput" placeholder="Depeartment" name='dept' value={dept} onChange={(e)=>onInputChange(e)} />
              <label for="floatingInput">Depeartment</label>
            </div>
            <button type="submit" class="btn btn-outline-primary">Update</button>
            <Link  class="btn btn-outline-danger mx-2" to="/ ">Cancel</Link>
            </form>
        </div>
      </div>
    </div>
  )
}
