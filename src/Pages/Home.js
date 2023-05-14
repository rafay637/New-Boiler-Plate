import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import '../App.css'
import { useNavigate } from 'react-router-dom';


function Home() {
    let navigate = useNavigate()
    let countinue = () => {
        navigate('/signup')
    }
    const mystyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",

    }
    return (
        <div className='bg'>
            <Box>

                <Typography align='center' variant='h3' color='white' >This is home Page...</Typography>
                <Typography align='center' variant='h3' color='white' >To Continue click Registration Button</Typography>
                <Box style={mystyle} sx={{ width: '40%' }}>

                </Box >
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }} >

                <Button color='success' variant="contained" onClick={countinue}>Registration</Button>
            </Box>
        </div>
    )
}

export default Home
