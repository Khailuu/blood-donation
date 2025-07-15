import React from 'react'

export const BackgroundCloud = () => {
  return (
    <ul className="background">
    {[...Array(12)].map((_, i) => (
      <li key={i} style={{ animationDelay: `${i * 10}s` }}></li>
    ))}
  </ul>
  )
}
