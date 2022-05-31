import React from 'react'
import './css/dashboard.css'
import Sidebar from './Sidebar'
import img1 from './img/details.jpg'
import img2 from './img/project.jpg'
import img3 from './img/testimonials.jpg'
import img4 from './img/Inquery.jpg'

export default function dashboard() {
    return (

        <div className='container-fluid'>
            <div className='row sidebar-row'>
                <Sidebar/>
                <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
                    <div className='container-fluid my-5 p-0'>
                        <div className='row'>
                            <div className='col-12 text-start'>
                                <h2>Dashboard</h2>
                            </div>
                            <div className='col-sm-4 col-12 mt-2'>
                                <div className="card dash-card w-80">
                                    <div className="card-body my-card-body">
                                        <img src={img1} className="card-img-top my-img" alt="..." />
                                        <a className="btn my-btn" href="/Details" role="button">Personal Details</a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-4 col-12 mt-2'>
                                <div className="card dash-card w-80">
                                    <div className="card-body my-card-body">
                                        <img src={img2} className="card-img-top my-img" alt="..." />
                                        <a className="btn my-btn" href="/Project" role="button">My Projects</a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-4 col-12 mt-2'>
                                <div className="card dash-card w-80">
                                    <div className="card-body my-card-body">
                                        <img src={img3} className="card-img-top my-img" alt="..." />
                                        <a className="btn my-btn" href="/Testimonials" role="button">Testimonials</a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-4 col-12 mt-2'>
                                <div className="card dash-card w-80">
                                    <div className="card-body my-card-body">
                                        <img src={img4} className="card-img-top my-img" alt="..." />
                                        <a className="btn my-btn" href="/Testimonials" role="button">User Inquery</a>
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

