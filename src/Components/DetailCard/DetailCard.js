import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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


    const { id, serviceName, description } = displayItem

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
                maxWidth: 'lg',

            }}>
                <Card sx={{ height: '100%', }}>


                    <CardContent sx={{
                        display: 'flex',
                    }}>

                        <img style={{ borderRadius: "10px", objectFit: 'cover', width: '100%', height: '100%' }} src={imageURL} alt="" />

                        <Box sx={{
                            textAlign: 'right',
                        }}>
                            <Typography variant="h5" component="div">
                                {serviceName}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            </Typography>
                            <Typography variant="body2">
                                {description}
                            </Typography>
                            <Button size="small">Book Now</Button>
                        </Box>

                    </CardContent>

                </Card>


            </Item>


        </div >
    )
}

export default DetailCard
