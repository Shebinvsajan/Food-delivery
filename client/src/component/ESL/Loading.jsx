import React from 'react'

import { ThreeDots } from  'react-loader-spinner'

function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'5rem' }} >
<ThreeDots 
height="100" 
width="100" 
radius="10"
color="#f79f12" 
ariaLabel="five-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
    </div>
  )
}

export default Loading