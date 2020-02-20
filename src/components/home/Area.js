import React from 'react'

export default function Area(props) {
    const { getAttractions, area } = props
    
    return (
        <React.Fragment>
            <section className="parkArea">
                <button onClick={() => getAttractions(area.id)}>
                    {props.area.name}
                </button>
            </section>
        </React.Fragment>
    )
}