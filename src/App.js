import React, { useState } from 'react'
import './App.css'
import Card from './Card'
import faker from 'faker'

function App() {
  const fullName = `${faker.name.lastName()}, ${faker.name.firstName()} `
  const [username, setUsername] = useState(fullName)

  const buttonMarked = (
    <div className="w3-container w3-bar w3-center">
      <button className="w3-button w3-red">YES</button>
      <button className="w3-button w3-yellow">NO</button>
    </div>
  )

  const changeNames = () => {
    setUsername(`${faker.name.lastName()}, ${faker.name.firstName()} `)
  }

  return (
    <div>
      <button className="w3-button" onClick={() => changeNames}>
        name
      </button>
      <div className="w3-row">
        <Card
          name={username}
          ocup={faker.name.jobTitle()}
          avatar={faker.image.avatar()}
          changeNames={changeNames}
        >
          {buttonMarked}
        </Card>
      </div>
    </div>
  )
}

export default App
