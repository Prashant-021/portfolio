import React from 'react'
import './css/navbar.css'
export default function navbar() {
    return (
        <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">Portfolio</a>
            <button className="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-nav col-md-2 col-12">
                <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="/Portfolio-Admin">Sign out</a>
                </div>
            </div>
        </header>
    )
}


// <div>
//             <nav className="navbar navbar-expand-lg navbar-dark">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="/">Portfolio</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="/Details">Personal Detail</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="/Project">Projects</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="/Testimonials">Testimonials</a>
//                             </li>
//                         </ul>
                        
//                     </div>
//                 </div>
//             </nav>

//         </div>