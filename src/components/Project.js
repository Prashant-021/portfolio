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
          <div class="container project-list">
            <div class="jumbotron">
              <div class="card">
                <div class="card-header">
                  Featured
                </div>
                <div class="card-body">
                  <h5 class="card-title">Project List</h5>

                  <table class="table table-striped table-hover table-bordered ">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Snapshot</th>
                        <th class="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
                          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                          <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                        </svg></td>
                        <td class="text-right d-flex justify-content-evenly">
                          <button type="button" class="btn btn-primary badge-pill">EDIT</button>
                          <button type="button" class="btn btn-danger badge-pill">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
                          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                          <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                        </svg></td>
                        <td class="text-right d-flex justify-content-evenly">
                          <button type="button" class="btn btn-primary badge-pill">EDIT</button>
                          <button type="button" class="btn btn-danger badge-pill">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
                          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                          <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                        </svg></td>
                        <td class="text-right d-flex justify-content-evenly">
                          <button type="button" class="btn btn-primary badge-pill">EDIT</button>
                          <button type="button" class="btn btn-danger badge-pill">Delete</button>
                        </td>
                      </tr>

                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

  )
}
