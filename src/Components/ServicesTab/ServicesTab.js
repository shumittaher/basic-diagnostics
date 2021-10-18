import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ServicesGrid from '../ServicesGrid/ServicesGrid';
import { ProductContext } from './../../contexts/ProductProvider';



const ServicesTab = () => {

    const { products } = useContext(ProductContext)

    const orthoProducts = products.filter((product) => product.type === 'Orthopedic')
    const PathoProducts = products.filter((product) => product.type === 'pathology')

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography component="div">{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    return (
        <div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottom: 1,
                borderColor: 'primary.main'
            }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Orthopedics" {...a11yProps(0)} />
                    <Tab label="Pathological" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ServicesGrid product={orthoProducts}></ServicesGrid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ServicesGrid product={PathoProducts}></ServicesGrid>

            </TabPanel>



        </div>
    )
}

export default ServicesTab
