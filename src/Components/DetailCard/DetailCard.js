import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProductContext } from './../../contexts/ProductProvider';
import { useParams } from 'react-router';
import { Box } from '@mui/system';



const DetailCard = () => {

    const { testId } = useParams()

    const items = useContext(ProductContext).products

    const displayItem = items.find((item) => parseInt(item.id) === parseInt(testId))


    const { id, serviceName, description, price } = displayItem

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const imageURL = `/images/products/${id}.jpg`


    return (
        <div>
            <Item sx={{
                height: '100%',
                mx: 'auto',
                mt: 5,
                maxWidth: 'sm',

            }}>
                <Card sx={{ height: '100%', }}>


                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row'
                        },
                    }}>
                        <Box sx={{
                            width: {
                                xs: '100%',
                                sm: '60%'
                            },
                        }}>
                            <img style={{ borderRadius: "10px", objectFit: 'cover', width: '100%', height: '100%' }} src={imageURL} alt="" />
                        </Box>
                        <Box sx={{
                            width: {xs:'90%',sm:'40%'},
                            textAlign: 'left',
                            mt:{xs:2, sm:0},
                            px: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Box>
                                <Typography sx={{ mb: 2 }} variant="h5" component="div">
                                    {serviceName}
                                </Typography>
                                <Typography variant="body2">
                                    {description}
                                </Typography>
                            </Box>

                            <Box sx={{ alignSelf: 'flex-end', mt: 5 }} >
                                <Typography sx={{ mb: 0 }} color="warning.main">
                                    Books for: BDT{price}
                                </Typography>
                                <Button sx={{ width: '100%' }} variant="contained" size="large">Book Now</Button>
                            </Box>
                        </Box>

                    </CardContent>

                </Card>


            </Item>


        </div >
    )
}

export default DetailCard
