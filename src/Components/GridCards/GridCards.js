import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';


const GridCards = ({ item }) => {

    const { serviceName, id, description } = item

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const imageURL = `/images/products/${id}.jpg`

    return (
        <>
            <Grid item xs={12} sm={4} sx={{
                height: '100%',
            }}>
                <Item sx={{
                    height: '100%',
                }}>
                    <Card sx={{ minWidth: 275, height: 575, }}>
                        <CardContent>
                            <img style={{ objectFit: 'cover', width: '100%', height: '250px', marginBottom: '1.5em' }} src={imageURL} alt="" />

                            <Typography variant="h5" component="div">
                                {serviceName}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Item>
            </Grid>

        </>
    )
}

export default GridCards
