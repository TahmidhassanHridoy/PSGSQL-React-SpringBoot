import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export default function Home
() {

  const [users,setUsers]=useState([]);
  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers=async ()=>{
    const result=await axios.get("http://localhost:5050/user")
    setUsers(result.data)
  }

  const deleteUser=async (id)=>{
    await axios.delete(`http://localhost:5050/user/${id}`)
    loadUsers()
  }

  return (
    <div className="container">
        <div className="py-4">
        <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">Count</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">UserName</th>
                <th scope="col">Department</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

            {
              users.map((user,index)=>(
                <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.dept}</td>
                <td>
                  <Link type="button" class="btn btn-outline-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>
                  <Link type="button" class="btn btn-outline-warning mx-2" to={`/edituser/${user.id}`}>Edit</Link>
                  <button type="button" class="btn btn-outline-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
                </tr>
              ))
            }
            </tbody>
        </table>
        </div>
        
    </div>
  )
}
