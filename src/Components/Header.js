import PropTypes from 'prop-types'
import React     from 'react'
import {
    headerInner,
    headerWrapper
}                from '../utils/styles'
import Div       from './Div'
import Logo      from './Logo'

const Header = ({title}) =>
    <Div theme={headerWrapper}>
        <Div theme={headerInner}>
            <Div theme={{
                width: 200,
                height: 25,
                marginBottom: [25, .7, 30]
            }}>
                <Logo theme={{width: 190}}/>
            </Div>
            {title} Client Portal
        </Div>
    </Div>

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header