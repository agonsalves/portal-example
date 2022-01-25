import React             from 'react'
import PropTypes         from 'prop-types'
import {flagStyleSwitch} from '../utils/styles'
import Div               from './Div'

const ItemFlag = ({flag}) =>
    <Div theme={flagStyleSwitch(flag)}>{flag}</Div>

ItemFlag.propTypes = {
    flag: PropTypes.string.isRequired
}

export default ItemFlag