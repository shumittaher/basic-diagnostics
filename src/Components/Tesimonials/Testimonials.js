import React from 'react'
import { Avatar, Box, Card, CardContent, Grid } from '@mui/material';
import { Typography } from '@mui/material/';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mx: 2,
                mt: 10, mb: 5

            }}>
                <Typography variant='h6' sx={{ lineHeight: 1 }} color='#33c9dc'>Testimonials</Typography>
                <Typography variant='h3' sx={{ fontWeight: 'Bold', lineHeight: 1 }} color='#1a237e'>What our patients say
                </Typography>
            </Box>

            <Grid container spacing={2} sx={{ mb: 15, px: 6 }}>
                <Grid item xs={12} md={6} sx={{
                    height: '100%', display: 'flex', justifyContent: 'center',
                }}>

                    <Card sx={{ backgroundColor: 'whitesmoke', p: 2 }}>

                        <CardContent>
                            <FormatQuoteIcon sx={{ lineHeight: 1, color: '#33c9dc', fontSize: 50 }} />
                            <Typography variant="body2" color="text.secondary" textAlign="left">
                                I had to get covid 19 diagnosis in 2020 and had to seek support from a professional clinic. a friend suggested me this clinic and I got my test results with in 2 hours

                            </Typography>
                        </CardContent>

                        <Avatar
                            alt=""
                            src="/images/customers/1.jpg"
                            sx={{ width: 100, height: 100, border: 10, borderColor: 'white', mx: 'auto', my: 2 }}
                        />

                        <CardContent >
                            <Typography gutterBottom variant="h4" component="div" color='#33c9dc' sx={{ fontWeight: 'Bold', lineHeight: .8 }}>
                                Steven Rashford
                            </Typography>
                            <Typography sx={{ fontWeight: 'Bold', lineHeight: .8 }} variant="h6" color="#1a237e">
                                Tourist
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    height: '100%', display: 'flex', justifyContent: 'center',
                }}>

                    <Card sx={{ backgroundColor: 'whitesmoke', p: 2 }}>

                        <CardContent>
                            <FormatQuoteIcon sx={{ lineHeight: 1, color: '#33c9dc', fontSize: 50 }} />
                            <Typography variant="body2" color="text.secondary" textAlign="left">
                                I had to get an emegency urine test last month due to kindney stone and had to seek support from a professional clinic. a friend suggested me this clinic and I got my test results with in 3 hours i also got a great recommendation

                            </Typography>
                        </CardContent>

                        <Avatar
                            alt=""
                            src="/images/customers/2.jpg"
                            sx={{ width: 100, height: 100, border: 10, borderColor: 'white', mx: 'auto', my: 2 }}
                        />

                        <CardContent >
                            <Typography gutterBottom variant="h4" component="div" color='#33c9dc' sx={{ fontWeight: 'Bold', lineHeight: .8 }}>
                                Brian Smith
                            </Typography>
                            <Typography sx={{ fontWeight: 'Bold', lineHeight: .8 }} variant="h6" color="#1a237e">
                                Student
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>


            </Grid>


        </div>
    )
}

export default Testimonials
