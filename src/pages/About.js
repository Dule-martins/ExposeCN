// Step 1: Import React
import * as React from 'react'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
          <h1>About Us</h1>
          <p>Hi there! We are proud to create this site, which will be used in promoting and educating people about cancer</p>
        </main>
    )
}

// Step 3: Export your component and Head
export const Head = () => <title>About Us</title>
export default AboutPage