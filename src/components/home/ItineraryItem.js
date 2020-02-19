import React from 'react'

export default function ItineraryItem(props) {
    const { starttime, attraction: { area, name } } = props.item
    return (
        <React.Fragment>
            <h4>Area: { area.name }</h4>
            <p>{ name } at { starttime } </p>
        </React.Fragment>
    )
}
