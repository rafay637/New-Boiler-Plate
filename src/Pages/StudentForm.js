import {
    Avatar,
    Button,
    CircularProgress,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { signUpUser } from "../Config/firebasemethods";

function StudentForm() {
    const [stdData, setstdData] = useState({});
    const [isLoading, setLoader] = useState(false);
    useEffect(() => { console.log(stdData) }, [stdData])
    const mystyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    };
    return (
        <div className="header">
            <Box style={mystyle} sx={{ p: 3 }}>
                <Box
                    sx={{
                        border: "2.5px solid white",
                        borderRadius: "15px",
                        color: "black",
                        width: "35%",
                        p: 3,
                    }}
                >
                    <Typography
                        variant="h5"
                        color="white"
                        align="center"
                        fontWeight="600"
                    >
                        Student Form
                    </Typography>
                    <Box sx={{ p: 2 }}>
                        <Box sx={{ p: 1.5 }}>
                            <TextField
                                color="warning"
                                required
                                fullWidth
                                id="standard-basic"
                                label="FirstName"
                                onChange={(e) => {
                                    setstdData.Name = e.target.value
                                }}
                                variant="standard"
                            />
                        </Box>
                        <Box sx={{ p: 1.5 }}>
                            <TextField
                                color="warning"
                                required
                                fullWidth
                                id="standard-basic"
                                label="LastName"
                                // type="email"
                                onChange={(e) => {
                                    setstdData.LastName = e.target.value
                                }}
                                variant="standard"
                            />
                        </Box>
                        {/* <Box sx={{ p: 1.5 }}>
                <TextField
                  color="warning"
                  type={"password"}
                  required
                  fullWidth
                  id="standard-basic"
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  variant="standard"
                />
              </Box> */}
                        <Box sx={{ p: 2 }}>
                            <InputLabel id="demo-simple-select-label">
                                Course
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={stdData}
                                // label="Select Avatar"
                                onChange={(e) => {
                                    setstdData.Course = e.target.value
                                }}
                                label="courses"
                                fullWidth
                            >
                                <MenuItem sx={{ width: "20%" }} value="Mern-Stack">
                                    Mern-Stack
                                </MenuItem>
                                <MenuItem sx={{ width: "20%" }} value="Graphics Designing">
                                    Graphics Designing
                                </MenuItem>
                                <MenuItem sx={{ width: "20%" }} value="Opp">
                                    Opp
                                </MenuItem>
                                <MenuItem sx={{ width: "20%" }} value="Hacking">
                                    Hacking
                                </MenuItem>
                            </Select>
                        </Box>
                        <Box sx={{ p: 2 }}>
                            <InputLabel id="demo-simple-select-label">
                                Section
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={stdData}
                                onChange={(e) => {
                                    setstdData.Section = e.target.value
                                }}
                                label="Section"
                                fullWidth
                            >
                                <MenuItem sx={{ width: "20%" }} value="A">
                                    A
                                </MenuItem>
                                <MenuItem sx={{ width: "20%" }} value="B">
                                    B
                                </MenuItem>
                                <MenuItem sx={{ width: "20%" }} value="c">
                                    C
                                </MenuItem>

                            </Select>
                        </Box>

                        <Box sx={{ p: 1.5 }}>
                            <TextField
                                color="warning"
                                required
                                fullWidth
                                id="standard-basic"
                                label="Contact"
                                // type="email"
                                onChange={(e) => {
                                    setstdData.Contact = e.target.value
                                }}
                                variant="standard"
                            />
                        </Box>
                        <Box sx={{ p: 1.5 }}>
                            <TextField
                                color="warning"
                                required
                                fullWidth
                                id="standard-basic"
                                label="Cnic"
                                // type="email"
                                onChange={(e) => {
                                    setstdData.Cnic = e.target.value
                                }}
                                variant="standard"
                            />
                        </Box>
                        <Box sx={{ p: 1.5 }}>
                            <TextField
                                color="warning"
                                required
                                fullWidth
                                id="standard-basic"
                                label="Father Name"
                                // type="email"
                                onChange={(e) => {
                                    setstdData.FatherName = e.target.value
                                }}
                                variant="standard"
                            />
                        </Box>
                        <Box sx={{ p: 1.5 }}>
                            <TextField
                                color="warning"
                                required
                                fullWidth
                                id="standard-basic"
                                label="Father Cnic"
                                // type="email"
                                onChange={(e) => {
                                    setstdData.FatherCnic = e.target.value
                                }}
                                variant="standard"
                            />
                        </Box>
                        <Box sx={{ p: 1.5 }}>
                            <TextField
                                color="warning"
                                required
                                fullWidth
                                id="standard-basic"
                                label="Father Contact"
                                // type="email"
                                onChange={(e) => {
                                    setstdData.FatherContact = e.target.value
                                }}
                                variant="standard"
                            />
                        </Box>
                        <Box sx={{ p: 1.5 }}>
                            <TextField
                                color="warning"
                                required
                                fullWidth
                                id="standard-basic"
                                label="Emergency Number"
                                // type="email"
                                onChange={(e) => {
                                    setstdData.EmergencyNumber = e.target.value
                                }}
                                variant="standard"
                            />
                        </Box>

                        <Box sx={{ p: 1.5 }}>
                            <TextField
                                color="warning"
                                required
                                fullWidth
                                id="standard-basic"
                                label="Date of Birth"
                                // type="email"
                                onChange={(e) => {
                                    setstdData.BirthDate = e.target.value
                                }}
                                variant="standard"
                            />
                        </Box>


                        {/* <Box>
                <Button
                  color="success"
                  disabled={isLoading}
                  fullWidth
                  sx={{ p: 1.5 }}
                  variant="contained"
                  onClick={signup}
                >
                  {isLoading ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </Box> */}

                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default StudentForm;
