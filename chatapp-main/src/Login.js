import React from 'react'
import { auth, gpro } from './firebase';
import {connect} from 'react-redux';
import "./login.css";
import {Container} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import store from './store';
import lof from "./wh.png";
import goo from "./Gog.png"




const Login = (props) => {
  
    const sign = ()=>{
        auth.signInWithPopup(gpro).then((data)=>{
            
             store.dispatch({
                type : "updateusers",
                user : [data.user]
            })
            console.log(store.getState().count)

        })
    }

    
    





    return (
        <div>
            <Container fluid className="container-login" >
                <div className="sign-login">

                    <img className="imgg-login"src={lof} alt="img" /><br/>
                    
                    <Button variant="contained" color="primary" onClick={sign}><span><img className="sp-login" src={goo} alt="img" width="20px" height="20px"/></span>sign in</Button>
            </div>
            
            </Container>
            


            
        </div>
    )
}
const nun = (state)=>{
    return{
        nu : state.count,
    }
    

}

export default connect(nun,null) (Login);
