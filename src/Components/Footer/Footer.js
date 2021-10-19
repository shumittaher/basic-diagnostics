import React from 'react'
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <div>

            <Box sx={{
                backgroundColor: '#1a237e                ',
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',

                py: 15,
                justifyContent: 'space-evenly',
                alignItems: 'center',

            }}>
                <Box sx={{ textAlign: 'left', width: '500px' }}>
                    <Typography sx={{ fontWeight: 'Bold', my: 2 }} variant='h3' color='#33c9dc'>
                        About us
                    </Typography>

                    <Typography sx={{ fontWeight: 'Bold', lineHeight: 1 }} variant='h6' color='white'>
                        We are a private company dedicated towards professional service and best healthcare. Our doctors, nurses and technicians are the best at there job and are hand picked professionals from the top of their field. Please feel free to contact us anytime if you have any further queries and suggestions. Stay healthy.
                    </Typography>
                </Box>


                <Box sx={{ borderLeft: 2, borderTop: 0, borderBottom: 0, borderRight: 0, py: 5, borderStyle: 'dotted', borderColor: '#C0C0C0' }} />

                <Box sx={{textAlign: 'right'}}>


                    <Typography sx={{ fontWeight: 'Bold', }} variant='h6' color='#33c9dc'>
                        Hotline: <span style={{ color: 'white' }}> +1 (880) 123-5641-13</span>
                    </Typography>


                    <Typography sx={{ fontWeight: 'Bold', }} variant='h6' color='#33c9dc'>
                        Address: <span style={{ color: 'white' }}> 856, Gulshan Avenue, Dhaka</span>
                    </Typography>


                    <Typography sx={{ fontWeight: 'Bold', }} variant='h6' color='#33c9dc'>
                        Sat-Thu: <span style={{ color: 'white' }}>  8:00AM - 7:00PM</span>
                    </Typography>

                </Box>





            </Box>


        </div>
    )
}

export default Footer
