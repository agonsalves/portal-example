import PropTypes            from 'prop-types'
import React                from 'react'
import {
    Link,
    useLocation
}                           from 'react-router-dom'
import {stripTrailingSlash} from '../utils/url'
import {inlineIcon}         from '../utils/styles'
import Div                  from './Div'
import Icon                 from './Icon'
import ItemFlag             from './ItemFlag'

const GalleryLink = ({item, icon}) => {
    const {pathname} = useLocation()
    return (
        <Div>
            <Icon icon={icon} theme={inlineIcon} fixedWidth/>
            <Link to={`${stripTrailingSlash(pathname)}/${item.slug}`}>{item.title}</Link>
            {item.flag && (
                <ItemFlag flag={item.flag[0]} />
            )}
        </Div>
    )
}

GalleryLink.propTypes = {
    item: PropTypes.object.isRequired,
    icon: PropTypes.object.isRequired
}

export default GalleryLink