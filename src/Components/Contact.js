import PropTypes   from 'prop-types'
import React       from 'react'
import contactIcon from '../assets/contact.svg'
import {
    bulletListStyle,
    contactIconStyle,
    sectionIconWrapper,
    sectionRightWrapper,
    sectionSubhead,
    sectionTitle,
    sectionWrapper
}                  from '../utils/styles'
import Div         from './Div'
import Img         from './Img'

const Contact = ({name, phone, email}) =>
    <Div theme={sectionWrapper}>
        <Div theme={sectionTitle}>
            <Div theme={sectionIconWrapper}><Img src={contactIcon} theme={contactIconStyle}/></Div>
            Contact
        </Div>
        <Div theme={{...sectionRightWrapper, paddingBottom: 50}}>
            {!!name && (
                <Div theme={sectionSubhead}>{name}</Div>
            )}
            {(!!phone || !!email) && (
                <ul style={bulletListStyle}>
                    {!!phone && (
                        <li>{phone}</li>
                    )}
                    {!!email && (
                        <li><a href={`mailto:${email}`}>{email}</a></li>
                    )}
                </ul>
            )}
        </Div>
    </Div>

Contact.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
}

export default Contact