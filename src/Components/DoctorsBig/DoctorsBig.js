import {  Box } from '@mui/system'
import React from 'react'
import { Typography } from '@mui/material/';

const DoctorsBig = () => {

    const imageURL = '/images/bigpicture/team-group.jpg'

    return (
        <div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    width: {
                        xs: '95%',
                        sm: '90%',
                    },
                    mt: 5,
                }}>
                    <img style={{ borderRadius: "10px", objectFit: 'cover', width: '100%', }} src={imageURL} alt="" />

                    <Box sx={{
                        backgroundColor: 'whitesmoke',
                        display:  'flex',
                        flexWrap: 'wrap',
                        width: '100%',
                        py: 5,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        borderRadius: '15px'
                    }}>
                        <Box sx={{  }}>
                            <Typography sx={{ fontWeight: 'Bold', my: 1 }} variant='h3' color='#33c9dc'>
                                86
                            </Typography>

                            <Typography sx={{ fontWeight: 'Bold', lineHeight: 1 }} variant='h6' color='primary'>
                                Qualitfied <br />
                                Doctors
                            </Typography>
                        </Box>


                        <Box sx={{ borderLeft: 2, borderTop: 0, borderBottom: 0, borderRight: 0, py: 5, borderStyle: 'dotted', borderColor: '#C0C0C0' }} />

                        <Box sx={{  }}>
                            <Typography sx={{ fontWeight: 'Bold', my: 1 }} variant='h3' color='#33c9dc'>
                                19
                            </Typography>

                            <Typography sx={{ fontWeight: 'Bold', lineHeight: 1 }} variant='h6' color='primary'>
                                Diagnostic
                                <br />
                                departments
                            </Typography>
                        </Box>


                        <Box sx={{ borderLeft: 2, borderTop: 0, borderBottom: 0, borderRight: 0, py: 5, borderStyle: 'dotted', borderColor: '#C0C0C0' }} />

                        <Box sx={{}}>
                            <Typography sx={{ fontWeight: 'Bold', my: 1 }} variant='h3' color='#33c9dc'>
                                27
                            </Typography>

                            <Typography sx={{ fontWeight: 'Bold', lineHeight: 1 }} variant='h6' color='primary'>
                                Years of
                                <br />
                                experience
                            </Typography>
                        </Box>


                        <Box sx={{ borderLeft: 2, borderTop: 0, borderBottom: 0, borderRight: 0, py: 5, borderStyle: 'dotted', borderColor: '#C0C0C0' }} />

                        <Box sx={{ }}>
                            <Typography sx={{ fontWeight: 'Bold', my: 1 }} variant='h3' color='#33c9dc'>
                                50+
                            </Typography>

                            <Typography sx={{ fontWeight: 'Bold', lineHeight: 1 }} variant='h6' color='primary'>
                                Patients
                                <br />
                                every day
                            </Typography>
                        </Box>


                        <Box sx={{ borderLeft: 2, borderTop: 0, borderBottom: 0, borderRight: 0, py: 5, borderStyle: 'dotted', borderColor: '#C0C0C0' }} />

                        <Box sx={{  }}>
                            <Typography sx={{ fontWeight: 'Bold', my: 1 }} variant='h3' color='#33c9dc'>
                                99%
                            </Typography>

                            <Typography sx={{ fontWeight: 'Bold', lineHeight: 1 }} variant='h6' color='primary'>
                                Diagnosis
                                <br />
                                accuracy
                            </Typography>
                        </Box>


                        <Box sx={{ borderLeft: 2, borderTop: 0, borderBottom: 0, borderRight: 0, py: 5, borderStyle: 'dotted', borderColor: '#C0C0C0' }} />

                        <Box sx={{ }}>
                            <Typography sx={{ fontWeight: 'Bold', my: 1 }} variant='h3' color='#33c9dc'>
                                6
                            </Typography>

                            <Typography sx={{ fontWeight: 'Bold', lineHeight: 1 }} variant='h6' color='primary'>
                                Branches in
                                <br />
                                the country
                            </Typography>
                        </Box>




                    </Box>
                </Box>

            </Box>

        </div>
    )
}

export default DoctorsBig
