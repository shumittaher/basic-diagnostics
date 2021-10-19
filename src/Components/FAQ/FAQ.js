import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';

const FAQ = () => {
    return (



        <div>

            <Typography sx={{ fontWeight: 'Bold', my: 5 }} variant='h3' color='#33c9dc'>
                Frequently Asked Questions

            </Typography>
            <Box sx={{
                mx: 'auto', mb: 5,
                width: {
                    xs: '95%',
                    sm: '90%',
                },
            }}>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Do I Need to make an appointment</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Unless you are facing an emergency, we suggest that you make an apointment before showing up. Ofcourse we will serve you even if you do not have an apointment. But your desired doctor may not be available at the time.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>How to make an appointment?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You can make an appintment by calling the number given below in the bottom section. You can also book a doctor from this website or send us and email.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Where Can I receive services</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                           We have 5 difference branch locations accross Dhaka city. You can make an appointment for any of the services. For selected cases we can also give you consultation virtually. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>How do I lodge a complain</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        We are sorry that you have expericed something worth complaining about. You can lodge a copmplain by calling the number given below in the bottom section. You can also book a doctor from this website or send us and email.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Box>

        </div>
    )
}

export default FAQ
