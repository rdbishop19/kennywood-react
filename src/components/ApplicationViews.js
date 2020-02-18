import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import Register from './auth/Register'
import ParkExplorer from './home/ParkExplorer'


function ApplicationViews() {
    return (
        <React.Fragment>
            <Route exact path="/" render={props =>{
                return <ParkExplorer {...props} />
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
