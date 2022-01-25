import {faCalendarAlt} from '@fortawesome/pro-regular-svg-icons'
import PropTypes       from 'prop-types'
import React           from 'react'
import timelineIcon    from '../assets/timeline.svg'
import {
    bulletListStyle,
    colors,
    inlineIcon,
    sectionIcon,
    sectionIconWrapper,
    sectionRightWrapper,
    sectionSubhead,
    sectionTitle,
    sectionWrapper,
    timelineDescription,
    timelineDuration,
    timelineIndex,
    timelineSubsection
}                      from '../utils/styles'
import Div             from './Div'
import Icon            from './Icon'
import Img             from './Img'

const Timeline = ({description, timeline, disclaimer}) =>
    <Div theme={sectionWrapper}>
        <Div theme={sectionTitle}>
            <Div theme={sectionIconWrapper}><Img src={timelineIcon} theme={sectionIcon}/></Div>
            Timeline
        </Div>
        <Div theme={sectionRightWrapper}>
            {!!description && (
                <Div theme={timelineDescription}>{description}</Div>
            )}
            {timeline.map(({fields}, index) => !fields.hidePhase &&
                <Div key={index} theme={timelineSubsection}>
                    <Div theme={timelineIndex}>
                        {String(index + 1).padStart(2, '0')}
                    </Div>
                    <Div theme={{...sectionSubhead, marginBottom: 5}}>{fields.phase}</Div>
                    <Div theme={timelineDuration}>
                        <Icon
                            icon={faCalendarAlt}
                            theme={{
                                ...inlineIcon,
                                color: colors.mediumGray
                            }}
                        />
                        {fields.duration}
                    </Div>
                    <ul style={bulletListStyle}>
                        {fields.phaseTasks.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </Div>
            )}
            {!!disclaimer && (
                <Div theme={timelineDescription}>{disclaimer}</Div>
            )}
        </Div>
    </Div>

Timeline.propTypes = {
    description: PropTypes.string,
    timeline: PropTypes.array,
    disclaimer: PropTypes.string
}

export default Timeline