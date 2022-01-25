import {
    faExternalLink,
    faFile,
    faLongArrowRight
}                from '@fortawesome/pro-regular-svg-icons'
import PropTypes from 'prop-types'
import React     from 'react'
import {
    useHistory,
    useParams
}                from 'react-router-dom'
import {
    getGallery,
    getItem,
    getItemList
}                from '../utils/getGallery'
import {
    clickToView,
    goToNextItem,
    itemDetailFile,
    itemDetailTitle,
    sectionWrapper
}                from '../utils/styles'
import {
    center,
    flex,
    pointer
}                from '../utils/themer'
import Anchor    from './Anchor'
import Div       from './Div'
import Icon      from './Icon'

const Detail = ({project}) => {
    const {slug, imgSlug} = useParams()
    const gallery = getGallery(project, slug)
    const itemList = getItemList(gallery)
    const item = getItem(itemList, imgSlug)
    const history = useHistory()
    const currentIndex = itemList.indexOf(item)
    const navBase = `/${project.slug}/${slug}/`
    const isImage = item.contentType.sys.id === 'projectVisualsImage'

    const wrapperStyle = () => {
        if (isImage)
            return {
                background: `url(${item.imageFile.fields.file.url}) center top no-repeat`,
                height: item.imageFile.fields.file.details.image.height + 'px',
                display: flex,
                width: '100%',
                mobile: {
                    backgroundSize: 'contain !important'
                }
            }

        return {
            width: '100%',
            display: flex,
            alignContent: 'stretch',
            justifyContent: center,
            backgroundColor: '#F3F3F3'
        }
    }

    window.scrollTo(0, 0)

    const goToNext = () => {
        if (currentIndex === itemList.length - 1)
            history.push(navBase + itemList[0].slug)
        else
            history.push(navBase + itemList[currentIndex + 1].slug)
    }

    const goToPrev = () => {
        if (currentIndex === 0)
            history.push(navBase + itemList[itemList.length - 1].slug)
        else
            history.push(navBase + itemList[currentIndex - 1].slug)
    }

    return (
        <Div theme={wrapperStyle()}>
            <Div
                onClick={goToPrev}
                theme={{
                    width: isImage ? '40%' : '100%',
                    cursor: pointer,
                    minHeight: '100vh'
                }}
            />
            {!isImage && (
                <Div theme={sectionWrapper}>
                    <Div theme={itemDetailFile}>
                        <Div theme={itemDetailTitle}>
                            {item.title}
                        </Div>
                        <Anchor href={item.file?.fields.file.url || item.url} target="_blank">
                            <Icon
                                icon={item.contentType.sys.id === 'projectVisualsFile' ? faFile : faExternalLink}
                                theme={{height: 300}}
                                size="9x"
                            />
                            <Div theme={clickToView}>Click to View</Div>
                        </Anchor>
                        <Div theme={goToNextItem} onClick={goToNext}>
                            Go to Next Item
                            <Icon icon={faLongArrowRight} theme={goToNextItem.icon}/>
                        </Div>
                    </Div>
                </Div>
            )}
            <Div
                onClick={goToNext}
                theme={{
                    width: isImage ? '60%' : '100%',
                    cursor: pointer,
                    minHeight: '100vh'
                }}
            />
        </Div>
    )
}

Detail.propTypes = {
    project: PropTypes.object.isRequired
}

export default Detail