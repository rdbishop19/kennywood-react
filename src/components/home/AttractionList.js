import React from 'react'
import Attraction from './Attraction'

export default function AttractionList(props) {
    const { attractions } = props
    return (
        <React.Fragment>
            {attractions.map(attraction =>
                <Attraction key={attraction.id} attraction={attraction} />
            )}
        </React.Fragment>
    )
}
