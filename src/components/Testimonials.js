import React from 'react'
import './css/testimonials.css'
export default function Testimonials() {
  return (
    <div className='container mt-5 d-flex justify-content-center mb-5'>
      <div className='row'>
        <div className='col'>
          <form id="msform">
            <fieldset>
              <h2 class="fs-title">Add Customer Feedback</h2>
              <h3 class="fs-subtitle">Company/Individual Name</h3>
              <input type="text" name="name" placeholder="Name" />
              <h2 class="fs-title">Profile Picture</h2>
              <input type="file" name="imgName" placeholder="Images" accept="image/*"/>
              <h2 class="fs-title">More Information</h2>
              <h3 class="fs-subtitle">Tell Their Reviews</h3>
              <textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
              <input type="submit" name="submit" class="submit action-button" value="Submit" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}
