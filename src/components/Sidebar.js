import React from 'react'

export default function Sidebar() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 p-0 d-md-block bg-light text-dark sidebar collapse">
            <div className="position-sticky pt-5">
                <ul className="nav flex-column text-start">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/Portfolio-Admin">
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Details">
                            Personal Details
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Project">
                            My Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Testimonials">
                            Testimonials
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Users">
                            User Inquery
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
