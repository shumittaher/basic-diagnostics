import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import { Box } from '@mui/system';
import GridCards from './../GridCards/GridCards';
import { ProductContext } from './../../contexts/ProductProvider';


const ServicesBig = () => {


    const { products } = useContext(ProductContext)

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
                    products.map((item) => <GridCards item={item} key={item.id}></GridCards>)
                }


            </Grid>
        </Box>
    )
}

export default ServicesBig
