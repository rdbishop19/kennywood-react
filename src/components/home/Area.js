import React from 'react'

export default function Area(props) {
    return (
        <React.Fragment>
            <section className="parkArea">
                <p>
                    {props.area.name}
                </p>
            </section>
        </React.Fragment>
    )
}