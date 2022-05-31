import React from 'react'
import Sidebar from './Sidebar'
import './css/Details.css'
export default function Details() {
  return (
    <div className='container-fluid'>
      <div className='row sidebar-row'>
        <Sidebar />

        <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
          <div className='container py-5'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className="card details-card mb-4">
                  <div className="card-body text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                      className="rounded-circle img-fluid" style={{ width: "150px" }} />
                    <h5 className="my-3">Dharmik Kotak</h5>
                    <p className="text-muted mb-1">UI/UX and web designer</p>
                    <p className="text-muted mb-4">Gujarat,India</p>
                  </div>
                </div>
                <div className="card details-card mb-4 mb-lg-0">
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">Linkedin</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                        <p className="mb-0">Whatsapp</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-twitter fa-lg" style={{ color: "#333333" }}></i>
                        <p className="mb-0">Skype</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-instagram fa-lg" style={{ color: "#333333" }}></i>
                        <p className="mb-0">Behance</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-facebook-f fa-lg" style={{ color: "#333333" }}></i>
                        <p className="mb-0">Dribbble</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-8'>
                <div className='card details-card mb-4'>
                  <div className="card-body text-left">
                    <form>
                      <div className="row">
                        <div className="col-sm-3">
                          <label className="mb-0 form-label">Full Name</label>
                        </div>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Mobile</p>
                        </div>
                        <div className="col-sm-9">
                          <input type="tel" className="form-control" />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">About</p>
                        </div>
                        <div className="col-sm-9">
                          <textarea className="form-control" id="textAreaExample" rows="4"></textarea>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Linkedin</p>
                        </div>
                        <div className="col-sm-9">
                          <input type="url" className="form-control" />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Whatsapp</p>
                        </div>
                        <div className="col-sm-9">
                          <input type="url" className="form-control" />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Skype</p>
                        </div>
                        <div className="col-sm-9">
                          <input type="url" className="form-control" />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Behance</p>
                        </div>
                        <div className="col-sm-9">
                          <input type="url" className="form-control" />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Dribbble</p>
                        </div>
                        <div className="col-sm-9">
                          <input type="url" className="form-control" />
                        </div>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <button className='btn btn-primary details-btn' type='submit'>Save Changes</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
