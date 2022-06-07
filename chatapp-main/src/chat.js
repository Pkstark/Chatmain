import React, { useEffect, useState } from 'react';
import Group from "./Group" ;
import db from './firebase';
import { timestamps } from './firebase';
import { useSelector } from 'react-redux';
import "./chat.css";
import {Container} from "react-bootstrap";
import GroupAddTwoToneIcon from '@material-ui/icons/GroupAddTwoTone';
import AddIcon from '@material-ui/icons/Add';

const Chat = (props) => {

    const [input, setinput]  = useState({
        messege : "",
        

    })

    

    const messi = useSelector((state)=> state.count)

    
    const [mese ,setmese] = useState([]);

    const send = ()=>{
       
        db.collection("on").add({
            messege : input.messege,
            timestamp : timestamps()

        }).then((res)=>{
            const mem = res.id;
            const mee = res.messege;
            console.log(mee,mem);
            const hu = document.getElementById("ji");
           hu.value = null;
            
            
            
        })
        
        
        
        
    }

    useEffect(()=>{
      const group =  db.collection("on").orderBy("timestamp","asc").onSnapshot((snap)=>{
            setmese(snap.docs.map((doc)=> ({id : doc.id, val : doc.data().messege})
            ))
            
        })
        return ()=>{
            group() 
           }
      
    },[])
   


   


   
    return (
        
            <Container fluid className="cont"><div className="chat-img">{messi && <div>{messi.map((im,jun)=> <img className = "img-chat"src={im.photoURL} alt="img" key={jun}></img>)}</div>}</div>
            <div>
            {messi &&  <div className="chat-name">{messi.map((gun,jun)=> <h2 key={jun}>{gun.displayName}</h2>)}</div>}</div>
            <div className="add-group0">
                <label className="add-group"><AddIcon className="add"/></label>
          
          <input className="input-chat"  placeholder="Add Group" id= "ji"onChange= {(event)=>{
              setinput({messege:event.target.value})
          }}></input>
          <button className="button"  onClick={send} ><GroupAddTwoToneIcon /></button></div>
          <div className="messege">
              

              {mese.map((ji,ol)=>{return(<Group key={ol} id = {ji.id} names={ji.val}></Group>)})}
              </div>

          
        </Container>
            
        
        
    )

}
 
export default Chat;
