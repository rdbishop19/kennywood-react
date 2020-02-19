import React from 'react'

export default function Area(props) {
    const handleClick = id => {
        console.log('id', id)
    }
    
    return (
        <React.Fragment>
            <section className="parkArea">
                <button onClick={() => handleClick(props.area.id)}>
                    ({props.area.id}){props.area.name}
                </button>
            </section>
        </React.Fragment>
    )
}