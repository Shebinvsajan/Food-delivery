import React from 'react'
import Alert from 'react-bootstrap/Alert';

function Error({Error}) {
    return (
        <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'2rem' }} >
    


            <Alert className='w-100 text-center' variant="danger" role="alert">
            SOMETHING WENT WRONG {Error}
        </Alert>
        </div>
    )
}

export default Error