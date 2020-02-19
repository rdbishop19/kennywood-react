import React from 'react'

export default function Attraction(props) {
    const { name } = props.attraction
    return (
        <React.Fragment>
            <p>{ name }</p>
        </React.Fragment>
    )
}
