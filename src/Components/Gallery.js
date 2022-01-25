import {faLongArrowLeft} from '@fortawesome/pro-light-svg-icons'
import PropTypes         from 'prop-types'
import React             from 'react'
import {
    Link,
    useParams
}                        from 'react-router-dom'
import {getGallery}      from '../utils/getGallery'
import {
    galleryBackButton,
    galleryDescription,
    gallerySubhead,
    galleryTitle,
    hangingItem,
    mainWrapper,
    sectionWrapper,
    subsectionWrapper
}                        from '../utils/styles'
import Div               from './Div'
import Footer            from './Footer'
import Icon              from './Icon'
import ItemSwitch        from './ItemSwitch'

const Gallery = ({project}) => {
    const {slug} = useParams()
    const gallery = getGallery(project, slug)
    return (
        <Div theme={mainWrapper}>
            <Div theme={sectionWrapper}>
                <Div theme={hangingItem}>
                    <Link to={`/${project.slug}`}>
                        <Icon icon={faLongArrowLeft} theme={galleryBackButton}/>
                    </Link>
                </Div>
                <Div theme={galleryTitle}>
                    {gallery.title}
                    {!!gallery.description && (
                        <Div theme={galleryDescription}>
                            <Div theme={{marginRight: 15}}>Note:</Div>
                            <Div>{gallery.description}</Div>
                        </Div>
                    )}
                </Div>
                <Div theme={{marginTop: [20, .7, '0']}}>
                    {gallery.sections?.map(({fields}, index) =>
                        <Div key={index} theme={subsectionWrapper}>
                            <Div theme={gallerySubhead}>{fields.heading}</Div>
                            {fields.items.map(({fields, sys}, index) =>
                                <ItemSwitch item={fields} type={sys.contentType.sys.id} key={index}/>
                            )}
                        </Div>
                    )}
                </Div>
            </Div>
            <Footer />
        </Div>
    )
}


Gallery.propTypes = {
    project: PropTypes.object
}

export default Gallery