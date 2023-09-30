'use client'

import React, { Children, createContext } from 'react'
export const MyContext=createContext()
const Context = ({Children}) => {

    const username='himanshusoni'
  return (
    <div>
        <MyContext.Provider value={username}>{Children}</MyContext.Provider></div>
  )
}

export default Context