import React from 'react'
import './css/dashboard.css'
import img1 from './img/details.jpg'
import img2 from './img/project.jpg'
import img3 from './img/testimonials.jpg'

export default function dashboard() {
    return (
        
        <div>
            <div className='container main-box pt-3 pb-4 mt-5'>
                <div className='row'>
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
                </div>
            </div>
            
        </div>
    )
}

