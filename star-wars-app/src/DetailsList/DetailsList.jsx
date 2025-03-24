import React from 'react'

export default function DetailsList({details, onBack}) {
  return (
    <div>
        <h3>{details.name}</h3>
        <ul>
        {Object.entries(details)
          .filter(([key, value]) => typeof value === 'string' || typeof value === 'number')
          .map(([key, value]) => (
            <li key={key}><strong>{key.replace(/_/g, ' ')}:</strong> {value}</li>
          ))}
      </ul>
      <button onClick={onBack}>Back</button>
    </div>
  )
}
