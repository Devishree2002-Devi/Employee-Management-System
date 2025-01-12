import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div>
      <Header />

      {/* Full-page Image */}
      <div style={{ width: '100%', height: '85vh', overflow: 'hidden', marginTop: '0.5rem' }}>
        <img 
          src="https://www.artify360.com/wp-content/uploads/2022/12/Employee-Management-Software-in-Bahrain.jpg" 
          alt="Full Page Image" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensures the image covers the full screen
            objectPosition: 'center', // Centers the image
          }} 
        />
      </div>
    </div>
  )
}

export default Home
