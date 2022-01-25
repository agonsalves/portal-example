import PropTypes       from 'prop-types'
import React           from 'react'
import visualsIcon     from '../assets/visuals.svg'
import {
    sectionIcon,
    sectionIconWrapper,
    sectionRightWrapper,
    sectionSubhead,
    sectionTitle,
    sectionWrapper,
    subsectionWrapper
}                      from '../utils/styles'
import {visibleTest}   from '../utils/visibleTest'
import Div             from './Div'
import Img             from './Img'
import ItemSwitch      from './ItemSwitch'
import PlaceholderItem from './PlaceholderItem'

const Visuals = ({visuals, title}) =>
    <Div theme={sectionWrapper}>
        <Div theme={sectionTitle}>
            <Div theme={sectionIconWrapper}><Img src={visualsIcon} theme={sectionIcon}/></Div>
            {title}
        </Div>
        <Div theme={sectionRightWrapper}>
            {visuals.filter(visibleTest).map(({fields}, index) =>
                <Div key={index} theme={subsectionWrapper}>
                    <Div theme={sectionSubhead}>{fields.heading}</Div>
                    {fields.files?.map(({fields, sys}, index) =>
                        <ItemSwitch item={fields} type={sys.contentType?.sys.id} key={index}/>
                    ) || (
                        <PlaceholderItem/>
                    )}
                </Div>
            )}
        </Div>
    </Div>

Visuals.propTypes = {
    visuals: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

export default Visuals