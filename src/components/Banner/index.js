import React, { useState } from 'react'
import './banner.css'

function Banner() {
  const [isActiveName, setIsActiveName] = useState(false)
  const [isActiveEmail, setIsActiveEmail] = useState(false)
  const [valueName, setValueName] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [error, setError] = useState(false)

  function handleTextChangeName(text) {
    setValueName(text)
    if (text !== '') {
      setIsActiveName(true)
    } else {
      setIsActiveName(false)
    }
  }
  function handleTextChangeEmail(text) {
    setValueEmail(text)
    if (text !== '') {
      setIsActiveEmail(true)
    } else {
      setIsActiveEmail(false)
    }
  }
  function getInformation() {
    const information = [{ name: valueName, email: valueEmail }]
    if((valueName === "" && valueEmail === "") || (valueName === "" || valueEmail === "")){
      setError (true)
    } else{
      setError(false)
      localStorage.setItem('information', JSON.stringify(information))
    }
    console.log(error)

  }
  return (
    <section id="Home">
      <div className="content">
        <div className="form grid">
          <h2>Obtenha informações de promoções em primeira mão.</h2>
          
          <div className="input">
            <input
              name="nome"
              id="nome"
              type="text"
              value={valueName}
              onChange={e => handleTextChangeName(e.target.value)}
            />
            <label
              htmlFor="nome"
              id="label_Name"
              className={isActiveName ? 'activeName' : ''}
            >
              Nome
            </label>
            
          </div>
          <div className="input">
            <input
              name="email"
              id="email"
              type="text"
              value={valueEmail}
              onChange={e => handleTextChangeEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              id="label_Email"
              className={isActiveEmail ? 'activeEmail' : ''}
            >
              Email
            </label>
          </div>
          {error ? <h4 className="error">campo vazio</h4>:''}
          <button className="button" onClick={getInformation}>
            {' '}
            Enviar
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner
