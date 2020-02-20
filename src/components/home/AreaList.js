import React from 'react'
import Area from './Area'

export default function AreaList(props) {
    const { getAttractions } = props
    return (
        <article className="explorerList">
            {
                props.areas.map(area =>
                    <Area key={area.id}
                        id={area.id}
                        area={area}
                        getAttractions={getAttractions}
                    />)
            }
        </article>
    )
}

