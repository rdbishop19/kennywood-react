import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../helpers/simpleAuth'
import AreaList from './AreaList'

const BASE_URL = 'http://localhost:8000'
const STORAGE_TOKEN = 'kennywood_token'

export default function ParkExplorer() {
    
    const [areas, setAreas] = useState([])

    const getParkAreas = () => {
        // get all park areas
        // set state with new data for park areas
        if (isAuthenticated()) {
            fetch(`${BASE_URL}/parkareas`, {
                'headers': {
                    'Accept': 'application/json',
                    'Authorization': `Token ${sessionStorage.getItem(STORAGE_TOKEN)}`
                }
            })
            .then(res => res.json())
            .then(res => {
                // console.log('parkareas', res)
                setAreas(res)
            })
        }
    }

    useEffect(getParkAreas, [])

    return (
        <React.Fragment>
            <main className="explorer">
                <AreaList areas={areas}/>
            </main>
        </React.Fragment>
    )
}
