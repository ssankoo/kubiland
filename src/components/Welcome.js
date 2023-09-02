import React from 'react';
import { Typography, IconButton } from '@mui/material';
import Logo from './assets/Logo.png'
import './css/Welcome.css'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';



function Welcome() {

    return (
        <div className="welcome-container">
            <div className="whole">
                <img src={Logo} alt='' className='welcome-logo' />

                <IconButton classname="scroll-down-arrow" aria-label='Scroll down'>
                    <KeyboardDoubleArrowDownIcon style={{ color: '#5C89CC' }} fontSize="large" />
                </IconButton></div>

        </div>
    )
}

export default Welcome;