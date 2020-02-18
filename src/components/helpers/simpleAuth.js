const BASE_URL = 'http://localhost:8000'

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
            sessionStorage.setItem('kennywood_token', res.token)
        }
    })
}

export { register }