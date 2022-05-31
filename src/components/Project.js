import React from 'react'
import Sidebar from './Sidebar'
import './css/project.css'
// import ScriptTag from 'react-script-tag'

export default function Project() {
  return (
    <div className='container-fluid'>
      <div className='row sidebar-row'>
        <Sidebar />
        <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
          <div className='container mt-5 mb-5'>
            <div className='row d-flex justify-content-center'>
              <div className='col-md-10 p-0'>
                <form id="msform">
                  <fieldset>
                    <h2 className="fs-title">Add Project</h2>
                    <h3 className="fs-subtitle">Project Title</h3>
                    <input type="text" name="title" placeholder="Title" />
                    <h2 className="fs-title">More Information</h2>
                    <h3 className="fs-subtitle">Your presence on the Project</h3>
                    <textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
                    <input type="text" name="github" placeholder="Github id" />
                    <input type="text" name="linkedin" placeholder="Linkedin id" />
                    <h2 className="fs-title">Glimpse of Project</h2>
                    <h3 className="fs-subtitle">Share Images</h3>
                    <input type="file" name="imgName" placeholder="Images" accept="image/*" />
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
