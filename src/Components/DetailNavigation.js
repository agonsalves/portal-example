import {faLongArrowLeft} from '@fortawesome/pro-light-svg-icons'
import React             from 'react'
import {useParams}       from 'react-router-dom'
import {
    getGallery,
    getItem,
    getItemList
}                        from '../utils/getGallery'
import {
    detailHeaderWrapper,
    headerInner,
    inlineIcon,
    itemNavButton,
    itemNavLabel,
    itemNavWrapper
}                        from '../utils/styles'
import Div               from './Div'
import Icon              from './Icon'
import StyledLink        from './StyledLink'

const DetailNavigation = ({project}) => {
    const {slug, imgSlug} = useParams()
    const gallery = getGallery(project, slug)
    const itemList = getItemList(gallery)
    const item = getItem(itemList, imgSlug)

    return (
        <Div theme={itemNavWrapper}>
            <Div theme={detailHeaderWrapper}>
                <Div theme={headerInner}>
                    <StyledLink to={`/${project.slug}/${gallery.slug}`} theme={itemNavButton}>
                        <Icon icon={faLongArrowLeft} theme={inlineIcon}/>
                        Back
                    </StyledLink>
                    <Div theme={itemNavLabel}>{`${gallery.title} | ${item.title}`}</Div>
                </Div>
            </Div>
        </Div>
    )
}

export default DetailNavigation