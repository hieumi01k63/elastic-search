import React from 'react'

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white mx-auto rounded-[20px] shadow-container">
      {children}
    </div>
  )
}
