import React from 'react'

export default function AppLayout(props) {
  return (
    <div className='font-sans antialiased min-h-screen'>
      {props.children}
    </div>
  )
}
