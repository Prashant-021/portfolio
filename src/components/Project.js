import React from 'react'
import './css/project.css'
// import ScriptTag from 'react-script-tag'

export default function Project() {
  return (
    <div className='container mt-5 d-flex justify-content-center mb-5'>
      <div className='row'>
        <div className='col'>
          <form id="msform">
            <fieldset>
              <h2 class="fs-title">Add Project</h2>
              <h3 class="fs-subtitle">Project Title</h3>
              <input type="text" name="title" placeholder="Title" />
              <h2 class="fs-title">More Information</h2>
              <h3 class="fs-subtitle">Your presence on the Project</h3>
              <textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
              <input type="text" name="github" placeholder="Github id" />
              <input type="text" name="linkedin" placeholder="Linkedin id" />
              <h2 class="fs-title">Glimpse of Project</h2>
              <h3 class="fs-subtitle">Share Images</h3>
              <input type="file" name="imgName" placeholder="Images" accept="image/*"/>
              <input type="submit" name="submit" class="submit action-button" value="Submit" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}
