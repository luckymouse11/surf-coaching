import React, { useState } from 'react'

const Contact = () => {

  // contact form - advanced contact page

  const [inputFields, setInputFields] = useState([{ name: '', age: '', email:'', abilityLevel: '', eventsPlayed: '', furtherComments: '' }])
  function handleSubmit(e) {
      e.preventDefault();
  }

  const handleFormChange = (index, event) => {
    let data = [...inputFields]
    data[index][event.target.name] = event.target.value
    setInputFields(data)
  }

  return (
    <form>
      {inputFields.map((input, index) => {
        return (
          <>
            <div key={index}>
              <input
                name='name'
                id='name'
                placeholder='Name'
                value={input.name}
                onChange={event => handleFormChange(index, event)}
              />
              <input
                name='age'
                id='age'
                placeholder='Age'
                value={input.age}
                onChange={event => handleFormChange(index, event)}
              />
              <input
                name='email'
                id='email'
                placeholder='Email'
                value={input.email}
                onChange={event => handleFormChange(index, event)}
              />
              <input
                name='abilityLevel'
                id='abilityLevel'
                placeholder='Ability Level'
                value={input.abilityLevel}
                onChange={event => handleFormChange(index, event)}
              />
              <input
                name='events'
                id='events'
                placeholder='Events Played'
                value={input.eventsPlayed}
                onChange={event => handleFormChange(index, event)}
              />
              <input
                name='furtherComments'
                id='furtherComments'
                placeholder='Further Comments'
                value={input.furtherComments}
                onChange={event => handleFormChange(index, event)}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>Submit Enquiry</button>
          </>
        )
      })}
    </form>
  )

}

export default Contact