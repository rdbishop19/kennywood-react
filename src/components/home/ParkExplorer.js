import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../helpers/simpleAuth'
import AreaList from './AreaList'
import AttractionList from './AttractionList'

const BASE_URL = 'http://localhost:8000'
const STORAGE_TOKEN = 'kennywood_token'

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
const init = {
    'headers': {
        'Accept': 'application/json',
        'Authorization': `Token ${sessionStorage.getItem(STORAGE_TOKEN)}`
    }
}

export default function ParkExplorer() {
    
    const [areas, setAreas] = useState([])
    const [attractions, setAttractions] = useState([])

    const getParkAreas = () => {
        // get all park areas
        // set state with new data for park areas
        if (isAuthenticated()) {
            fetch(`${BASE_URL}/parkareas`, init)
            .then(res => res.json())
            .then(res => setAreas(res))
        }
    }

    const getAttractions = () => {
        if (isAuthenticated()) {
            fetch(`${BASE_URL}/attractions`, init)
            .then(res => res.json())
            .then(res => setAttractions(res))
        }
    }

    useEffect(getParkAreas, [])
    useEffect(getAttractions, [])

    return (
        <React.Fragment>
            <main className="explorer">
                <AreaList areas={areas}/>
                <AttractionList attractions={attractions} />
            </main>
        </React.Fragment>
    )
}
