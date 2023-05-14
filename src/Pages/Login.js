import { Avatar, Button, CircularProgress, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box, } from '@mui/system'
import React, { useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { LoginUser, signUpUser } from '../Config/firebasemethods';

function Login() {
    var data;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoader] = useState(false)

    let navigate = useNavigate()
    let login = () => {
        setLoader(true)
        LoginUser({
            email,
            password
        }).then((success) => {
            console.log(success)
            data = success;
            setLoader(false)
            navigate(`/main${success.id}`, {
                state: success
            })
        }).catch((err) => {
            setLoader(false)
            alert(err)
        })
    }

    let locate = () => {

        navigate('/signup')
    }

    const mystyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    }


    return (
        <div className='header'>
            <Box style={mystyle}>
                <Box sx={{ border: "2.5px solid white", borderRadius: "15px", color: "black", width: "35%", p: 3 }}  >
                    <Typography variant='h5' color="white" align='center' fontWeight='600' >Login</Typography>
                    <Box sx={{ p: 2 }}>

                        <Box sx={{ p: 1.5 }}>
                            <TextField color='warning' required fullWidth id="standard-basic" label="Email" type="email" onChange={(e) => setEmail(e.target.value)} variant="standard" />
                        </Box>
                        <Box sx={{ p: 1.5 }}>
                            <TextField color='warning' type={'password'} required fullWidth id="standard-basic" label="Password" onChange={(e) => setPassword(e.target.value)} variant="standard" />
                        </Box>

                        <Button color='success' disabled={isLoading} fullWidth sx={{ p: 1.5 }} variant="contained" onClick={login}>
                            {isLoading ? <CircularProgress /> : "Login"}
                        </Button>
                        <Box sx={{ p: 1.5 }}>
                            <Typography variant='span' color='white' >Dont Have an Account ?</Typography>
                            <Typography variant='span' color='white' sx={{ textDecoration: "underline", cursor: "pointer", pl: 0.5 }} onClick={() => navigate('/signup')}>SignIn</Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>


        </div>
    )
}

export default Login
