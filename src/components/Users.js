import React from "react";
import Sidebar from "./Sidebar";
import {User} from "./User"

export const Users = (props) => {
    return (
        <div className='container-fluid'>
            <div className='row sidebar-row'>
                <Sidebar />
                <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4 my-5'>
                    <h3>Users Inquiry</h3>
                    {props.user.length===0? "No User Inquery":
                    props.user.map((users)=>{
                        return <User users = {users} key= {users.sno} onDelete={props.onDelete}/>
                    })
                    }
                    
                </main>
            </div> 
        </div>
    

    )
}