import React from 'react';
import {Link, useHistory} from 'react-router-dom'

const Home = () => {

    const history = useHistory();

    const hum = ()=>{
        history.push("/chat");

    }
   


    return (
        <div>
            <div>
                <ul>
                    <li>
                        <button onClick={hum}>CHAT</button>
                    </li>
                    
                </ul>
                
                
            </div>
            <div>
            <ul>
                    <li>
                        <Link to= "/service">service</Link>
                    </li>
                    <li>
                       <Link to = "/files">Files</Link>
                    </li>
                    <li>
                        <Link to= "/login">login</Link>
                    </li>
                    <li>
                        <Link to= "/webcam">cam</Link>
                    </li>
                </ul>
               
            </div>
        </div>
    )
}

export default Home
