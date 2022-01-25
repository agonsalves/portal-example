import PropTypes       from 'prop-types'
import React           from 'react'
import docs            from '../assets/docs.svg'
import {
    sectionIcon,
    sectionIconWrapper,
    sectionRightWrapper,
    sectionSubhead,
    sectionTitle,
    sectionWrapper,
    subsectionWrapper
}                      from '../utils/styles'
import Div             from './Div'
import Img             from './Img'
import ItemSwitch      from './ItemSwitch'
import PlaceholderItem from './PlaceholderItem'

const Documents = ({documents}) =>
    <Div theme={sectionWrapper}>
        <Div theme={sectionTitle}>
            <Div theme={sectionIconWrapper}><Img src={docs} theme={sectionIcon}/></Div>
            Documents
        </Div>
        <Div theme={sectionRightWrapper}>
            {documents.map(({fields}) => fields.files?.some(i => !i.fields.hidden) &&
                <Div key={Math.random()} theme={subsectionWrapper}>
                    <Div theme={sectionSubhead}>{fields.heading}</Div>
                    <div>
                        {fields.files?.map(({fields, sys}, index) =>
                            <ItemSwitch key={index} item={fields} type={sys.contentType.sys.id}/>
                        ) || (
                            <PlaceholderItem/>
                        )}
                    </div>
                </Div>
            )}
        </Div>
    </Div>

Documents.propTypes = {
    documents: PropTypes.array.isRequired
}

export default Documents