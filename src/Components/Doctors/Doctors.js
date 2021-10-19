import { Avatar, Button, CardActions, CardContent, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { Card } from '@mui/material/';

const Doctors = () => {



    return (
        <Box >
            <Grid container spacing={2} sx={{ my: 5 }}>
                <Grid item xs={12} sm={3} sx={{
                    height: '100%', display: 'flex', justifyContent: 'center',
                }}>

                    <Card sx={{ maxWidth: 345, backgroundColor: 'whitesmoke' }}>
                        <Avatar
                            alt=""
                            src="/images/doctors/1.jpg"
                            sx={{ width: 200, height: 200, border: 10, borderColor: 'white', mx: 'auto', my: 2 }}
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                John Smith
                            </Typography>
                            <Typography variant="body2" color="text.secondary" textAlign="left">
                                Jhon is an excellent cardiologist with 4 years of experience as out head of cardiology department
                                Obtained MBBS degree from Sher-e-Bangla Medical College in 1992
                                Completed MD in Cardiology from Bangabandhu Sheikh Mujib Medical University (BSMMU) (former IPGMR) in 2006

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Book Now</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>


                <Grid item xs={12} sm={3} sx={{
                    height: '100%', display: 'flex', justifyContent: 'center',
                }}>

                    <Card sx={{ maxWidth: 345, backgroundColor: 'whitesmoke' }}>
                        <Avatar
                            alt=""
                            src="/images/doctors/2.jpg"
                            sx={{ width: 200, height: 200, border: 10, borderColor: 'white', mx: 'auto', my: 2 }}
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Jenny Richards

                            </Typography>
                            <Typography variant="body2" color="text.secondary" textAlign="left">
                                Jenny is an excellent orthopedic surgeon with 4 years of experience as out head of orthopedic department
                                Obtained MBBS degree from Barisal Sher-E-Bangla Medical College under University of Dhaka in 1982
                                Completed D-Card in 1988 and MD in orthopedic from University of Dhaka  in 1995

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Book Now</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={3} sx={{
                    height: '100%', display: 'flex', justifyContent: 'center',
                }}>

                    <Card sx={{ maxWidth: 345, backgroundColor: 'whitesmoke' }}>
                        <Avatar
                            alt=""
                            src="/images/doctors/3.jpg"
                            sx={{ width: 200, height: 200, border: 10, borderColor: 'white', mx: 'auto', my: 2 }}
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Antony Taylor

                            </Typography>
                            <Typography variant="body2" color="text.secondary" textAlign="left">
                                Antony is an excellent urology specialist with 4 years of experience as out head of urology department
                                Thirteen years training in urology from 1988 to 2001 (As Asstt. Registrar,  Registrar and Asstt. Professor)  with exposure  in  Adult  and Pediatric  diagnostic  and  interventional procedure, at National Institute

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Book Now</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={3} sx={{
                    height: '100%', display: 'flex', justifyContent: 'center',
                }}>

                    <Card sx={{ maxWidth: 345, backgroundColor: 'whitesmoke' }}>
                        <Avatar
                            alt=""
                            src="/images/doctors/4.jpg"
                            sx={{ width: 200, height: 200, border: 10, borderColor: 'white', mx: 'auto', my: 2 }}
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Brian Marsh

                            </Typography>
                            <Typography variant="body2" color="text.secondary" textAlign="left">
                                Brian is an excellent urology specialist with 7 years of experience as out senior consultant in urology department.
                                He completed MBBS from Chattogram Medical College in 1993, and Obtained MS from BSMMU in 2004. Served as Assistant Professor in Different Medical Colleges and National Institute of Urology till 2011.

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Book Now</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>




            </Grid>

        </Box>
    )
}

export default Doctors
