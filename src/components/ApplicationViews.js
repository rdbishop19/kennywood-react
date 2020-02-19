import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import Register from './auth/Register'
import ParkExplorer from './home/ParkExplorer'
import ItineraryList from './home/ItineraryList'


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
            <Route path="/myitinerary" render={props => {
                return <ItineraryList {...props} />
                }}
            />
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)
