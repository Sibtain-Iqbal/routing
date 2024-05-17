import React from 'react'

function Error404() {
    return (
        <div style={styles.container}>
          <h2 style={styles.heading}>404 Not Found</h2>
          <p style={styles.text}>Sorry, the page you are looking for does not exist.</p>
        </div>
      );
    };
    
    const styles = {
      container: {
        textAlign: 'center',
        marginTop: '50px',
      },
      heading: {
        fontSize: '24px',
        color: 'red',
      },
      text: {
        fontSize: '18px',
      },
    };
 
export default Error404
