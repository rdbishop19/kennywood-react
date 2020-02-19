import React, { useState } from 'react'
import { register } from '../helpers/simpleAuth'
import { useHistory } from 'react-router-dom'

function Register() {
    const [user, setUser] = useState()
    const history = useHistory()
    const handleInputChange = evt => {
        setUser({
            ...user,
            [evt.target.id]: evt.target.value
        })
    }

    const handleRegister = evt => {
      evt.preventDefault()

      // create object from state
      const new_user = {
        "username": user.userName,
        "first_name": user.firstName,
        "last_name": user.lastName,
        "family_members": Number(user.familyMembers),
        "email": user.email,
        "password": user.password
      }

      // Make fetch call with the object as the body of the POST request
      register(new_user)
        .then(history.push('/'))
    }

    return (
        <main style={{ textAlign: "center" }}>
        <form className="form--login" onSubmit={handleRegister}>
          <h1 className="h3 mb-3 font-weight-normal">Register to use Saturday in the Park</h1>
          <fieldset>
            <label htmlFor="userName"> Username </label>
            <input onChange={(evt) => handleInputChange(evt)}
              id="userName"
              type="text"
              name="userName"
              className="form-control"
              placeholder="Username"
              required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="firstName"> First Name </label>
            <input onChange={handleInputChange}
              id="firstName"
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First name"
              required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="lastName"> Last Name </label>
            <input onChange={handleInputChange}
              id="lastName"
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last name"
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input onChange={handleInputChange}
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="Email address"
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="inputEmail"> Family members </label>
            <input onChange={handleInputChange}
              id="familyMembers"
              type="number"
              name="familyMembers"
              className="form-control"
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input onChange={handleInputChange}
              id="password"
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="verifyPassword"> Verify Password </label>
            <input onChange={handleInputChange}
              id="verifyPassword"
              type="password"
              name="verifyPassword"
              className="form-control"
              placeholder="Verify password"
              required />
          </fieldset>
          <fieldset>
            <button type="submit">
              Register
            </button>
          </fieldset>
        </form>
      </main>
    )
}

export default Register
