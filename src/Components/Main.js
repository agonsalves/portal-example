import PropTypes     from 'prop-types'
import React         from 'react'
import {mainWrapper} from '../utils/styles'
import {visibleTest} from '../utils/visibleTest'
import Contact       from './Contact'
import Div           from './Div'
import Documents     from './Documents'
import Footer        from './Footer'
import Sites         from './Sites'
import Timeline      from './Timeline'
import Visuals       from './Visuals'

const Main = ({project}) =>
    <Div theme={mainWrapper}>
        {(project.displayCurrentProjects && project.currentProjects?.some(visibleTest)) && (
            <Visuals visuals={project.currentProjects} title="Current Projects"/>
        )}
        {!!project.documents && (
            <Documents documents={project.documents}/>
        )}
        {(project.displayVisuals && project.visuals?.some(visibleTest)) && (
            <Visuals visuals={project.visuals} title={project.visualsTitle}/>
        )}
        {(project.displaySites && !!project.sites) && (
            <Sites sites={project.sites}/>
        )}
        {(project.displayTimeline && !!project.timeline) && (
            <Timeline
                description={project.timelineDescription}
                timeline={project.timeline}
                disclaimer={project.timelineDisclaimer}
            />
        )}
        {!!project.contactName && (
            <Contact
                name={project.contactName}
                phone={project.contactPhone}
                email={project.contactEmail}
            />
        )}
        <Footer/>
    </Div>

Main.propTypes = {
    project: PropTypes.object
}

export default Main