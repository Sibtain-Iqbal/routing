import React from 'react'
import Header from '../Common/Header'

function Home() {

    return (
        <div style={styles.container}>
            <Header/>
          <h1 style={styles.heading}>Welcome to My Website</h1>
          <div style={styles.imageContainer}>
            <img src="https://via.placeholder.com/200" alt="Placeholder 1" style={styles.image} />
            <img src="https://via.placeholder.com/200" alt="Placeholder 2" style={styles.image} />
            <img src="https://via.placeholder.com/200" alt="Placeholder 3" style={styles.image} />
          </div>
        </div>
      );
    };
    
    const styles = {
      container: {
        textAlign: 'center',
        marginTop: '50px',
      },
      heading: {
        fontSize: '32px',
        marginBottom: '20px',
        color: 'blue',
      },
      imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: '200px',
        height: '200px',
        margin: '10px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      },
    };

export default Home
