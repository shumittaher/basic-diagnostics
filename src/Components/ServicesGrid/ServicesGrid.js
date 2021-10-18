import { Grid } from '@mui/material'
import React from 'react'

import { Box } from '@mui/system';
import GridCards from './../GridCards/GridCards';


const ServicesGrid = ({ product }) => {

   
    return (
        <Box sx={{
            justifyContent: 'center',
            display: 'flex',
        }}>
            <Grid sx={{
                maxWidth: 'lg',
                height: '100%',
            }}
                container spacing={2}>


                {
                    product.map((item) => <GridCards item={item} key = {item.id}></GridCards>)
                }


            </Grid>
        </Box>
    )
}

export default ServicesGrid
