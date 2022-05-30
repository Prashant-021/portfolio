import React from 'react'
import './css/Details.css'
export default function Details() {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-4'>
          <div class="card details-card mb-4">
            <div class="card-body text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                class="rounded-circle img-fluid" style={{ width: "150px" }} />
              <h5 class="my-3">Dharmik Kotak</h5>
              <p class="text-muted mb-1">UI/UX and web designer</p>
              <p class="text-muted mb-4">Gujarat,India</p>
            </div>
          </div>
          <div class="card details-card mb-4 mb-lg-0">
            <div class="card-body p-0">
              <ul class="list-group list-group-flush rounded-3">
                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i class="fas fa-globe fa-lg text-warning"></i>
                  <p class="mb-0">Linkedin</p>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i class="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                  <p class="mb-0">Whatsapp</p>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i class="fab fa-twitter fa-lg" style={{ color: "#333333" }}></i>
                  <p class="mb-0">Skype</p>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i class="fab fa-instagram fa-lg" style={{ color: "#333333" }}></i>
                  <p class="mb-0">Behance</p>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i class="fab fa-facebook-f fa-lg" style={{ color: "#333333" }}></i>
                  <p class="mb-0">Dribbble</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-8'>
          <div className='card details-card mb-4'>
            <div class="card-body text-left">
              <form>
                <div class="row">
                  <div class="col-sm-3">
                    <label class="mb-0 form-label">Full Name</label>
                  </div>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="email" class="form-control" />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Mobile</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="tel" class="form-control" />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Address</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">About</p>
                  </div>
                  <div class="col-sm-9">
                  <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Linkedin</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="url" class="form-control" />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Whatsapp</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="url" class="form-control" />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Skype</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="url" class="form-control" />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Behance</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="url" class="form-control" />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Dribbble</p>
                  </div>
                  <div class="col-sm-9">
                    <input type="url" class="form-control" />
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
  )
}
