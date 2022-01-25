import {faGlobe} from '@fortawesome/pro-regular-svg-icons'
import React     from 'react'
import {
    inlineIcon,
    landingPageHeader,
    landingPageHeaderInner,
    landingPageVisitLink,
    landingPageVisitLinkText
}                from '../utils/styles'
import Anchor    from './Anchor'
import Div       from './Div'
import Icon      from './Icon'
import Logo      from './Logo'

const LandingPageHeader = () =>
    <Div theme={landingPageHeader}>
        <Div theme={landingPageHeaderInner}>
            <Logo theme={{width: 290}}/>
            <Div theme={landingPageVisitLink}>
                <Icon icon={faGlobe} theme={inlineIcon}/>
                <Anchor theme={landingPageVisitLinkText} href="https://www.greatjakes.com">
                    Visit Our Website
                </Anchor>
            </Div>
        </Div>
    </Div>

export default LandingPageHeader