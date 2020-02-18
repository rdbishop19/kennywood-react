import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import Register from './auth/Register'


function ApplicationViews() {
    return (
        <React.Fragment>
            <Route exact path="/" render={props =>{
                console.log('props', props)
                return 
            }}
            />
            <Route path="/register" render={props => {
                return <Register {...props} />
            }}
            />
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)
