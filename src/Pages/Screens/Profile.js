import React from 'react'
import Navbar from '../../Components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
function Profile() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state)
    return (
        <div>
            <Navbar />
        </div>
    )
}

export default Profile
