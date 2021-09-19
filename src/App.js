import React, { useState } from 'react'
import './App.css'
import Card from './Card'
import faker from 'faker'

function App() {
  const fullName = faker.name.findName();
  const [username, setUsername] = useState(fullName);
  const [isShowing, setToggleShowCard] = useState(true)

  const buttonMarked = (
    <div className="w3-container w3-center">
      <button className="w3-button w3-red">YES</button>
      <button className="w3-button w3-yellow">NO</button>
    </div>
  )

  const flipName = () => setUsername(fullName);

  const onChangeName = e => setUsername(e.target.value);

  const toggleShowCard = () => setToggleShowCard(!isShowing);

  return (
    <div>
      <button className="w3-margin-small w3-button w3-black" onClick={toggleShowCard}>
        show
      </button>
      <div className="w3-row">
        {isShowing && <Card
          name={username}
          ocup={faker.name.jobTitle()}
          avatar={faker.image.avatar()}
          flipName={flipName}
          onChangeName={onChangeName}
        >
          {buttonMarked}
        </Card>}
      </div>
    </div>
  )
}

export default App
