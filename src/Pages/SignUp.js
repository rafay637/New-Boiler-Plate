import { Avatar, Button, CircularProgress, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box, } from '@mui/system'
import React, { useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { signUpUser } from '../Config/firebasemethods';

function SignUp() {
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setLoader] = useState(false)
    const handleChange = (event) => {
        setAvatar(event.target.value);

    };
    const mystyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    }
    let navigate = useNavigate()
    let signup = () => {
        setLoader(true)
        signUpUser({ email, password, username, avatar })
            .then((success) => {
                setLoader(false)
                navigate('/login')
            })
            .catch((error) => {
                alert(error)
                setLoader(false)
            })
    }
    return (
        <div className='header'>

            <Box style={mystyle}>
                <Box sx={{ border: "2.5px solid white", borderRadius: "15px", color: "black", width: "35%", p: 3 }}  >
                    <Typography variant='h5' color="white" align='center' fontWeight='600' >Sign Up</Typography>
                    <Box sx={{ p: 2 }}>
                        <Box sx={{ p: 1.5 }}>
                            <TextField color='warning' required fullWidth id="standard-basic" label="UserName" onChange={(e) => setUsername(e.target.value)} variant="standard" />
                        </Box>
                        <Box sx={{ p: 1.5 }}>
                            <TextField color='warning' required fullWidth id="standard-basic" label="Email" type="email" onChange={(e) => setEmail(e.target.value)} variant="standard" />
                        </Box>
                        <Box sx={{ p: 1.5 }}>
                            <TextField color='warning' type={'password'} required fullWidth id="standard-basic" label="Password" onChange={(e) => setPassword(e.target.value)} variant="standard" />
                        </Box>
                        <Box sx={{ p: 2 }}>
                            <InputLabel id="demo-simple-select-label">Select Avatar</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={avatar}
                                // label="Select Avatar"
                                onChange={handleChange}
                                fullWidth
                            >
                                <MenuItem sx={{ width: "20%" }} value={'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'}>
                                    <Avatar alt="Travis Howard" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" sx={{ width: 50, height: 50 }} />
                                </MenuItem>

                                <MenuItem value={'https://evedonusfilm.com/wp-content/uploads/2022/05/photo-1457449940276-e8deed18bfff.jpg'}>
                                    <Avatar alt="Travis Howard" src="https://evedonusfilm.com/wp-content/uploads/2022/05/photo-1457449940276-e8deed18bfff.jpg" sx={{ width: 50, height: 50 }} />
                                </MenuItem>

                                <MenuItem value={'https://wallpapercave.com/uwp/uwp2258415.jpeg'}>
                                    <Avatar alt="Travis Howard" src="https://wallpapercave.com/uwp/uwp2258415.jpeg" sx={{ width: 50, height: 50 }} />
                                </MenuItem>

                                <MenuItem value={'https://i.pinimg.com/564x/47/b5/7f/47b57f1db1c0791455ad88db64b08987.jpg'}>
                                    <Avatar alt="Travis Howard" src="https://i.pinimg.com/564x/47/b5/7f/47b57f1db1c0791455ad88db64b08987.jpg" sx={{ width: 50, height: 50 }} />
                                </MenuItem>

                                <MenuItem value={'https://i.pinimg.com/564x/fa/87/aa/fa87aaefba228e0093b2f79dc550924f.jpg'}>
                                    <Avatar alt="Travis Howard" src="https://i.pinimg.com/564x/fa/87/aa/fa87aaefba228e0093b2f79dc550924f.jpg" sx={{ width: 50, height: 50 }} />
                                </MenuItem>
                                <MenuItem value={'https://i.pinimg.com/564x/42/02/11/4202114ab42bcaa01fd8ddadd8675ce4.jpg'}>
                                    <Avatar alt="Travis Howard" src="https://i.pinimg.com/564x/42/02/11/4202114ab42bcaa01fd8ddadd8675ce4.jpg" sx={{ width: 50, height: 50 }} />
                                </MenuItem>
                                <MenuItem value={'https://i.pinimg.com/564x/3c/b2/c3/3cb2c32e7dc71dc645b00f408a97224b.jpg'}>
                                    <Avatar alt="Travis Howard" src="https://i.pinimg.com/564x/3c/b2/c3/3cb2c32e7dc71dc645b00f408a97224b.jpg" sx={{ width: 50, height: 50 }} />
                                </MenuItem>
                            </Select>
                        </Box>
                        <Box>
                            <Button color='success' disabled={isLoading} fullWidth sx={{ p: 1.5 }} variant="contained" onClick={signup}>
                                {isLoading ? <CircularProgress color='inherit' /> : "Create Account"}
                            </Button>
                        </Box>
                        <Box sx={{ p: 0.5 }}>
                            <Typography variant='span' color='white' >Already Have an Account ?</Typography>
                            <Typography variant='span' color='white' sx={{ textDecoration: "underline", cursor: "pointer", pl: 0.5 }} onClick={() => navigate('/login')}>Login</Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>


        </div>
    )
}

export default SignUp
