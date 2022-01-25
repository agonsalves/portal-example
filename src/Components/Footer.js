import React from 'react'
import Div   from './Div'

const Footer = () =>
    <Div theme={{
        margin: '0 auto',
        display: 'flex',
        height: 165,
        alignItems: 'center',
        size: 18,
        color: '#949499',
        width: [1200, .6, '90%'],
    }}>
        &copy; {new Date().getFullYear()} Great Jakes Marketing Company
    </Div>

export default Footer