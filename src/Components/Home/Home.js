import { Box } from '@mui/system'
import React from 'react'
import Banner from '../Banner/Banner'
import ServicesTab from '../ServicesTab/ServicesTab'

const Home = () => {



    return (
        <div>

            <Banner></Banner>

            <Box>
                <ServicesTab></ServicesTab>
            </Box>

        </div>
    )
}

export default Home
