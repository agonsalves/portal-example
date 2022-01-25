import {
    faKey,
    faUser
}                      from '@fortawesome/pro-regular-svg-icons'
import {faGlobe, faSignInAlt}       from '@fortawesome/pro-solid-svg-icons'
import PropTypes       from 'prop-types'
import React           from 'react'
import siteIcon        from '../assets/sites.svg'
import {
    inlineIcon,
    sectionIcon,
    sectionIconWrapper,
    sectionRightWrapper,
    sectionSubhead,
    sectionTitle,
    sectionWrapper,
    siteDescription,
    subsectionWrapper
}                      from '../utils/styles'
import Div             from './Div'
import ExternalLink    from './ExternalLink'
import Icon            from './Icon'
import Img             from './Img'
import PlaceholderItem from './PlaceholderItem'

const Sites = ({sites}) =>
    <Div theme={sectionWrapper}>
        <Div theme={sectionTitle}>
            <Div theme={sectionIconWrapper}>
                <Img src={siteIcon} theme={{
                    ...sectionIcon,
                    paddingTop: 5,
                    paddingBottom: 5,
                    boxSizing: 'border-box'
                }}/>
            </Div>
            Sites
        </Div>
        <Div theme={sectionRightWrapper}>
            {sites.map(({fields}) =>
                <Div key={Math.random()} theme={subsectionWrapper}>
                    <Div theme={sectionSubhead}>{fields.siteTitle}</Div>
                    {fields.siteDescription && (
                        <Div theme={siteDescription}>{fields.siteDescription}</Div>
                    )}
                    {(fields.siteUrl && (
                        <Div>
                            <Div>
                                <Icon icon={faGlobe} theme={inlineIcon}/>
                                <ExternalLink href={fields.siteUrl}>Visit Site</ExternalLink>
                            </Div>
                            {fields.siteLoginScreen && (
                                <Div>
                                    <Icon icon={faSignInAlt} theme={inlineIcon}/>
                                    <ExternalLink href={fields.siteLoginScreen}>Login Screen</ExternalLink>
                                </Div>
                            )}
                            {fields.siteUsername && (
                                <Div>
                                    <Icon icon={faUser} theme={inlineIcon} title="Username"/>
                                    {fields.siteUsername}
                                </Div>
                            )}
                            {fields.sitePassword && (
                                <Div>
                                    <Icon icon={faKey} theme={inlineIcon} title="Password"/>
                                    {fields.sitePassword}
                                </Div>
                            )}
                        </Div>
                    )) || (
                        <PlaceholderItem/>
                    )}
                </Div>
            )}
        </Div>
    </Div>

Sites.propTypes = {
    sites: PropTypes.array.isRequired
}

export default Sites