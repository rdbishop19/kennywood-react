const BASE_URL = 'http://localhost:8000'
const STORAGE_TOKEN = "kennywood_token"

const isAuthenticated = () => {
    return sessionStorage.getItem(STORAGE_TOKEN) !== null
}

const login = credentials => {
    return fetch(`${BASE_URL}/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(res => {
        console.log('login', res)
        if ("valid" in res && res.valid && 'token' in res) {
            sessionStorage.setItem(STORAGE_TOKEN, res.token)
        }
    })
}

const register = (userInfo) => {
    return fetch(`${BASE_URL}/register/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(res => {
        if ("token" in res) {
            sessionStorage.setItem(STORAGE_TOKEN, res.token)
        }
    })
}

const logout = () => {
    sessionStorage.removeItem(STORAGE_TOKEN)
}

export { isAuthenticated, login, logout, register }