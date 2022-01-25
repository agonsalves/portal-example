import Cookies from 'js-cookie'
import React   from 'react'
import {
    Redirect,
    Route
}              from 'react-router-dom'

const AuthenticatedRoute = ({children, ...rest}) => {
    const {slug} = rest.computedMatch.params
    const password = slug + slug.length
    const hasAccess = Cookies.get('auth' + slug) === (password)

    return (
        <Route
            {...rest}
            render={({location}) => (hasAccess ? (
                children
            ) : (
                <Redirect to={{
                    pathname: '/auth',
                    state: {from: location, slug}
                }}/>
            ))}
        />
    )
}

export default AuthenticatedRoute