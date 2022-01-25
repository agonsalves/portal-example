import React, {useEffect} from 'react'
import {Query}            from 'react-contentful'
import {Helmet}           from 'react-helmet'
import {
    Route,
    Switch,
    useHistory,
    useParams
}                         from 'react-router-dom'
import {pageFrame}        from '../utils/styles'
import Detail             from './Detail'
import DetailNavigation   from './DetailNavigation'
import Div                from './Div'
import Gallery            from './Gallery'
import Header             from './Header'
import Main               from './Main'

const App = () => {
    const {slug} = useParams()
    const {location} = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <Query
            contentType="project"
            query={{
                'fields.slug[in]': `${slug || ''}`,
            }}
        >
            {({data, error, fetched, loading}) => {
                if (loading || !fetched) {
                    return null
                }

                if (error) {
                    console.error(error)
                    return null
                }

                if (!data) {
                    return <p>Page does not exist.</p>
                }

                const project = data.items?.[0].fields || {}

                console.log(project)

                // Process and pass in the loaded `data` necessary for your page or child components.
                return (
                    <Div theme={pageFrame}>
                        <Helmet>
                            <title>{`${project.name} Client Portal`}</title>
                        </Helmet>
                        <Switch>
                            <Route exact path={`/${slug}/:slug/:imgSlug`}
                                   children={<DetailNavigation project={project}/>}/>
                            <Route children={<Header title={project.name}/>}/>
                        </Switch>
                        <Switch>
                            <Route exact path={`/${slug}`} children={<Main project={project}/>}/>
                            <Route exact path={`/${slug}/:slug`} children={<Gallery project={project}/>}/>
                            <Route exact path={`/${slug}/:slug/:imgSlug`} children={<Detail project={project}/>}/>
                        </Switch>
                    </Div>
                )
            }}
        </Query>
    )
}

export default App
