import { Box } from '@mui/system'
import React from 'react'
import Banner from '../Banner/Banner'
import DoctorsBig from '../DoctorsBig/DoctorsBig'
import ServicesTab from '../ServicesTab/ServicesTab'
import FAQ from './../FAQ/FAQ';

const Home = () => {



    return (
        <div>

            <Banner></Banner>

            <Box>
                <ServicesTab></ServicesTab>
            </Box>

            <DoctorsBig></DoctorsBig>

            <FAQ></FAQ>

        </div>
    )
}

export default Home
