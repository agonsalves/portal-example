import React  from 'react'
import Anchor from './Anchor'
import PropTypes from 'prop-types'

const ExternalLink = props =>
    <Anchor
        {...props}
        rel="noopener noreferrer"
        target={props.target || '_blank'}
    />

ExternalLink.propTypes = {
    href: PropTypes.string.isRequired
}

export default ExternalLink