import React from 'react'
import { useNavigate } from 'react-router-dom'


function Sidebar() {

    const Navigate=useNavigate();

    return (
        <>
            <div className='sidebar '>
                <div className='d-flex flex-column gap-3 py-3'>
                    <img src="src/assets/Instagram_logo.svg.png" alt="Instagram Logo" className='logo-text' />
                    <div ><i className="bi bi-house-door "></i> Home</div>
                    <div><i className="bi bi-search"></i> Search</div>
                    <div><i className="bi bi-compass"></i> Explore</div>
                    <div><i className="bi bi-chat-dots"></i> Messages</div>
                    <div><i className="bi bi-heart"></i> Notifications</div>
                    <div><i className="bi bi-plus-square"></i> Create</div>
                    <div><i className="proficon bi bi-person-circle" onClick={()=>{Navigate("/profile")}} ></i> Profile</div>
                    
                </div>
                <div className='position-fixed bottom-0 m-2 d-flex flex-column gap-3 '>
                    <div><i className="bi bi-threads"></i>Threads</div>
                    <div><i className="bi bi-three-dots-vertical"></i>More</div>
                </div>
            </div>
        </>
    )
}

export default Sidebar