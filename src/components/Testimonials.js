import React from 'react'
import Sidebar from './Sidebar'
import './css/testimonials.css'
export default function Testimonials() {
  return (
    <div className='container-fluid'>
      <div className='row sidebar-row'>
        <Sidebar />

        <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
          <div className='container mt-5  mb-5'>
            <div className='row d-flex justify-content-center'>
              <div className='col-md-10 p-0'>
                <form id="msform">
                  <fieldset>
                    <h2 className="fs-title">Add Customer Feedback</h2>
                    <h3 className="fs-subtitle">Company/Individual Name</h3>
                    <input type="text" name="name" placeholder="Name" />
                    <h2 className="fs-title">Profile Picture</h2>
                    <input type="file" name="imgName" placeholder="Images" accept="image/*" />
                    <h2 className="fs-title">More Information</h2>
                    <h3 className="fs-subtitle">Tell Their Reviews</h3>
                    <textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
                    <input type="submit" name="submit" className="submit action-button" value="Submit" />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
