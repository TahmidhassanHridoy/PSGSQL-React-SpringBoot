import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Full Stack Application </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
              <Link className="btn btn-outline-light" to="/adduser">Add User </Link>
              <Link className="btn btn-outline-light" to="/adduser">ManyToMany Relation </Link>
            </div>
        </div>
        </nav>
</div>
  )
}
