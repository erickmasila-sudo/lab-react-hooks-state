import React from 'react'

const DarkModeToggle = ({darkMode, setDarkMode}) => {
  

  return (
    <button onClick={() => setDarkMode(!darkMode)}>{darkMode? "Toggle Light Mode" : "Toggle Dark Mode"} {/* TODO: Update this text from Dark to Light dynamically */}</button>
  )
}

export default DarkModeToggle
