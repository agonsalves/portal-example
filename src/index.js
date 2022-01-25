import 'core-js/stable'
import React              from 'react'
import {
    ContentfulClient,
    ContentfulProvider
}                         from 'react-contentful'
import ReactDOM           from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch
}                         from 'react-router-dom'
import App                from './Components/App'
import AuthenticatedRoute from './Components/AuthenticatedRoute'
import Authentication     from './Components/Authentication'
import LandingPage        from './Components/LandingPage'
import './index.css'
import * as serviceWorker from './serviceWorker'

const contentfulClient = new ContentfulClient({
    accessToken: '',
    space: '',
})

ReactDOM.render(
    <React.StrictMode>
        <ContentfulProvider client={contentfulClient}>
            <Router>
                <Switch>
                    <Route children={<Authentication/>} path="/auth" exact/>
                    <AuthenticatedRoute children={<App/>} path="/:slug"/>
                    <Route children={<LandingPage/>} path="/"/>
                </Switch>
            </Router>
        </ContentfulProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
