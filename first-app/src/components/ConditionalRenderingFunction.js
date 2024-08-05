import React from 'react'

function ConditionalRenderingFunction(props) {
  return (
    <div>
        <h1>{props.loading==="true"?"Logged in":"Loading..."}</h1>
    </div>
  )
}

export default ConditionalRenderingFunction