import React from 'react';

export default function FooterComponent() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }
  return (
    <div className='footer'>
        Made with ❤ by Darshan Tank <span style={styleSymbol}>©</span> 2024
    </div>
  )
}
