import PropTypes from 'prop-types'
import {Link}    from 'react-router-dom'
import styled    from 'styled-components'
import {themer}  from '../utils/themer'

const StyledLink = styled(Link)`${props => themer(props.theme)}`

StyledLink.displayName = 'StyledLink'

StyledLink.propTypes = {
    theme: PropTypes.object,
}

export default StyledLink