import {faLeaf}     from '@fortawesome/pro-solid-svg-icons'
import React        from 'react'
import {inlineIcon} from '../utils/styles'
import Div          from './Div'
import Icon         from './Icon'

const PlaceholderItem = () =>
    <Div>
        <Icon icon={faLeaf} theme={inlineIcon}/>
        Link Coming Soon
    </Div>

export default PlaceholderItem