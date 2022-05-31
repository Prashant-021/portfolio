import React from "react";
import './css/user.css'

export const User = ({ users, onDelete }) => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-10">
        
<div className='card details-card mb-4'>
                  <div className="card-body text-left">
                    <form>
                      <div className="row">
                        <div className="col-sm-3">
                          <label className="mb-0 form-label">Name</label>
                        </div>
                        <div className="col-sm-9">
                        <h4>{users.Username}</h4>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                        <p>{users.Useremail}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Project Name</p>
                        </div>
                        <div className="col-sm-9">
                        <p>{users.Projectname}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Project Description</p>
                        </div>
                        <div className="col-sm-9">
                        <p>{users.ProjectDesc}</p>
                        </div>
                      </div>
                      <hr />
                      <button
                className="btn btn-sm btn-danger"
                onClick={() => {
                    onDelete(users);
                }}
                >
                Delete
                </button>
                    </form>
                  </div>
                </div>
      </div>
    </div>
  );
};
