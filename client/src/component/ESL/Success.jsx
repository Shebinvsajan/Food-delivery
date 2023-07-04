import React from 'react'
import Alert from 'react-bootstrap/Alert';


function Success([{Success}]) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'2rem' }}>
        <Alert className="alert alert-success" role="alert">
  This is a success alert—check it out!{Success}
</Alert>
    </div>
  )
}

export default Success