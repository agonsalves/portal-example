import {faImage}    from '@fortawesome/pro-regular-svg-icons'
import {
    faExternalLinkSquareAlt,
    faFileAlt,
    faFolder
}                   from '@fortawesome/pro-solid-svg-icons'
import PropType     from 'prop-types'
import React        from 'react'
import {inlineIcon} from '../utils/styles'
import Div          from './Div'
import ExternalLink from './ExternalLink'
import GalleryLink  from './GalleryLink'
import Icon         from './Icon'
import ItemFlag     from './ItemFlag'


const ItemSwitch = ({item, type}) => {
    if (item?.hidden === true)
        return null

    switch (type) {
        case 'projectFile':
        case 'projectVisualsFile':
            return item.file ?
                <Div>
                    <Icon icon={faFileAlt} theme={inlineIcon}/>
                    <ExternalLink href={item.file.fields.file.url}>{item.title}</ExternalLink>
                    {item.flag && (
                        <ItemFlag flag={item.flag[0]}/>
                    )}
                </Div>
                : null
        case 'projectLink':
        case 'projectVisualsLink':
            return <Div>
                <Icon icon={faExternalLinkSquareAlt} theme={inlineIcon} fixedWidth/>
                <ExternalLink href={item.url}>{item.title}</ExternalLink>
                {item.flag && (
                    <ItemFlag flag={item.flag[0]}/>
                )}
            </Div>
        case 'projectVisualsGallery':
            return <GalleryLink item={item} icon={faFolder}/>
        case 'projectVisualsImage':
            return <GalleryLink item={item} icon={faImage}/>
        default:
            return null
    }
}

ItemSwitch.propTypes = {
    item: PropType.object.isRequired
}

export default ItemSwitch