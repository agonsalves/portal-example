import React             from 'react'
import {
    landingPageText,
    landingPageTitle,
    landingPageWrapper,
    pageFrame
}                        from '../utils/styles'
import Div               from './Div'
import LandingPageHeader from './LandingPageHeader'

const LandingPage = () =>
    <Div theme={pageFrame}>
        <LandingPageHeader/>
        <Div theme={landingPageWrapper}>
            <Div theme={landingPageTitle}>
                Client Portal
            </Div>
            <Div theme={landingPageText}>
                To access your files, please request login credentials from your project’s producer.
            </Div>
        </Div>
    </Div>

export default LandingPage