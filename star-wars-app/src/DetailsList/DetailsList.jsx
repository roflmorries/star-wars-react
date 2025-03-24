import React from 'react'
import styled from 'styled-components'

const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Orbitron", serif;
    h3 {
        font-size: 24px;
        color: #ffe81f;
    }
    ul {
        list-style: none;
        font-size: 16px;
        padding-left: 0;
    }
    .details-list__button {
        background-color: #ffe81f;
        color: #232c38;
        width: 100%;
        min-height: 32px;
        border: none;
        border-radius: 7px;
        transition: background-color 0.2s ease-in-out;
        margin-top: 30px;
        font-family: "Orbitron", serif;
        &:hover {
            background-color: white;
        } 
    }
`

export default function DetailsList({details, onBack}) {
  return (
    <Details className='details-list__container'>
        <h3>{details.name}</h3>
        <ul>
        {Object.entries(details)
          .filter(([key, value]) => typeof value === 'string' || typeof value === 'number')
          .map(([key, value]) => (
            <li key={key}><strong>{key.replace(/_/g, ' ')}:</strong> {value}</li>
          ))}
      </ul>
      <button className='details-list__button' onClick={onBack}>Back</button>
    </Details>
  )
}
