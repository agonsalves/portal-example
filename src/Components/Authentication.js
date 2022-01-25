import Cookies           from 'js-cookie'
import React, {
    useEffect,
    useState
}                        from 'react'
import {
    useHistory,
    useLocation
}                        from 'react-router-dom'
import {
    authMessage,
    authWrapper,
    pageFrame
}                        from '../utils/styles'
import Div               from './Div'
import LandingPageHeader from './LandingPageHeader'

const Authentication = () => {
    const history = useHistory()
    const {state} = useLocation()
    const [input, setInput] = useState('')
    const {slug, from} = state
    const password = slug + slug.length

    useEffect(() => {
        if (!from.pathname)
            history.push('/')

        if (input === password) {
            Cookies.set('auth' + slug, password, {expires: 365})
            history.push(from.pathname)
        }
    }, [input, password, slug, from.pathname, history])

    return (
        <Div theme={pageFrame}>
            <LandingPageHeader/>
            <Div theme={authWrapper}>
                <Div theme={authMessage}>Please enter your password:</Div>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    style={{
                        width: 300,
                        height: 45,
                        border: '1px solid #bbbbbf',
                        boxSizing: 'border-box',
                        padding: 10,
                        fontSize: 16
                    }}
                    type="password"
                />
            </Div>
        </Div>
    )
}

export default Authentication