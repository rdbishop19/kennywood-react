import React from 'react'
import Area from './Area'

export default function AreaList(props) {
    return (
        <article className="explorerList">
            {
                props.areas.map(area =>
                    <Area key={area.id}
                        area={area}
                    />)
            }
        </article>
    )
}

