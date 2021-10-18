import { Grid, Paper } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ServicesGrid = () => {

  

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={3}>
                    <Item>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    benevolent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Item>
                </Grid>

                <Grid item xs={3}>
                    <Item>

                    </Item>
                </Grid>

                <Grid item xs={3}>
                    <Item>

                    </Item>
                </Grid>

                <Grid item xs={3}>
                    <Item>

                    </Item>
                </Grid>

            </Grid>
        </div>
    )
}

export default ServicesGrid
