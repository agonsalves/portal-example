import React from 'react'
import logo  from '../assets/logo.svg'
import Img   from './Img'

const Logo = ({theme}) => <Img src={logo} theme={{display: 'block', ...theme}}/>

export default Logo