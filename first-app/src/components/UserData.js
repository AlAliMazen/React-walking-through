import React from 'react'

function UserData(props) {
  return (
    <div>
        {props.isLoaded?(<p>Hello User</p>):(<p>You are nor logged in ... Loading...</p>)}
    </div>
  )
}

export default UserData