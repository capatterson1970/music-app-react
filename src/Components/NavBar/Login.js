import React from 'react'
import auth from '../auth'



const Login = (props) => {
    

    return (

        <div>
     
            <button onClick={() => {
                auth.login(()=>{
                    props.history.push('/app')
                })
            }}>Login</button>

         </div>
    )
}

export default Login