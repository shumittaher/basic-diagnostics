import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import bannerImg1 from "../../images/xray.jpg"
import bannerImg2 from "../../images/blood.jpg"
import bannerImg3 from "../../images/checkups.jpg"
import Typography from '@mui/material/Typography';


const Banner = () => {

    const [picture, setPicture] = useState(1)


    useEffect(() => {
        setTimeout(() => { (picture < 3) ? setPicture(picture + 1) : setPicture(1) }, 3000)
    }, [picture])

    const imageBoxStyle = {
        height: '100%'
    }

    const imageStyle = {

        width: '100%',
        height: 600,
        objectFit: 'cover'

    }

    const textBoxStyle = {
    }

    const typographyStyle = {
        color: "white",
        bgcolor: 'primary.main',
        m: 0
    }

    const showPicture = () => {

        switch (picture) {

            case 1:
                {
                    return <Box sx={imageBoxStyle}>

                        <img style={imageStyle}
                            src={bannerImg1}
                            alt="First Slide"
                        />

                        <Box component="div" sx={textBoxStyle}                 >
                            <Typography variant="h5" sx={typographyStyle}>Best Xray Service</Typography>
                            <Typography sx={typographyStyle}>We Provide the Best Xray Service. Fast Delivery. Our trained radioLogists will never miss a thing</Typography>
                        </Box>
                    </Box>
                }

            case 2:
                {
                    return <Box sx={imageBoxStyle}>
                        <img
                            style={imageStyle}
                            src={bannerImg2}
                            alt="Second slide"
                        />
                        <Box component="div" sx={textBoxStyle}                          >

                            <Typography variant="h5" sx={typographyStyle}>Best Blood Tests</Typography>
                            <Typography sx={typographyStyle}>We Provide the reliable Blood tests. Fast Delivery for your convenience</Typography>
                        </Box>
                    </Box>
                }

            case 3:
                {
                    return <Box sx={imageBoxStyle}>
                        <img
                            style={imageStyle}
                            src={bannerImg3}
                            alt="Third slide"
                        />
                        <Box component="div" sx={textBoxStyle}>

                            <Typography variant="h5" sx={typographyStyle}>Full Body Checkups</Typography>
                            <Typography sx={typographyStyle}>We check your body in full, It pays to be careful </Typography>
                        </Box>
                    </Box>
                }
            default: { return }
        }

    }


    return (
        <div>
            {showPicture()}
        </div>
    )
}

export default Banner
