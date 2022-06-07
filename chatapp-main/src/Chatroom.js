import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import db, { firestorage, timestamps} from './firebase';
import Mess from './Mess';
import  "./chatroom.css";
import {Container} from "react-bootstrap"
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import IconButton from '@material-ui/core/IconButton';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import {Avatar}  from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



const Chatroom = ({names}) => {
    
    const [input , setinput] = useState({
        messege : "",
    
        
    });
    const[sfeed , setsfeed] = useState("");
    const [file ,setfile] = useState(null)

    const [mesege, setmessege] = useState([]);
    const [user1 , setus] = useState();


    const mint = useSelector((state)=> state.count)

    const ji = ()=>{
        return(
            mint.map((guf)=> setus(guf.displayName))
        )
        
        
    }

   

   const {id,id1} = useParams();

   const send = ()=>{
       db.collection("on").doc(id).collection("meme").add(
           {
               messege : input.messege,
               timestamp : timestamps(),
               username : user1
           }
       ).then((ev)=>{
           console.log("messege sent succesfully!");
           const hu = document.getElementById("in");
           hu.value = null;

           
       }).catch((er)=>{
           console.log("messege not sent");
       })
   }

const fileschange = (event)=>{
       const filess= (event.target.files[0]);
    setfile(filess);
 const storage = firestorage.ref(filess.name)

      storage.put(filess).on("state_changed",((snap)=>{
          const per = (snap.bytesTransferred/snap.totalBytes)*100;

          console.log(per);
      }),
      (error)=>{
          console.log(error)

      },
      async ()=>{
          const url = await storage.getDownloadURL();

          const creatAT = timestamps();
          db.collection("on").doc(id).collection("meme").add({
              url : url,
              timestamp: creatAT,
              type : filess.type,
              username : user1
              
          })
        })
    }


   useEffect(()=>{
       if(id){
           ji();

        db.collection("on").doc(id).collection("meme").orderBy("timestamp","asc").onSnapshot((snap)=>{
           setmessege(snap.docs.map((doc)=> ({ids:doc.id,mes:doc.data()})))

       })}
       setinput("")
       
       },[id,file])

       useEffect(()=>{
        setsfeed(Math.floor(Math.random() *7000))
    },[])


     
    

    return (
        <Container fluid="xlg"className="cont-1" >
            
            <div className="header">
                <Link to="/">
                <IconButton><ArrowBackIcon/></IconButton>
                </Link>
                
                <h2><span><Avatar src={`https://avatars.dicebear.com/api/human/${sfeed}.svg`} /></span>{id1}</h2>
                   <div>
                <Link to="/webcam" className="video">
                    <IconButton>
                    <VideoCallIcon/>

                    </IconButton>

                </Link>
            </div>
            </div>
     


            {/* head finish */}
             
                 <div  className="messege-body">
                     <div className="mn">    <span>{names}</span>

                {mesege.map((full,ind)=>{
    return(
        <Mess key={ind} docs={full} urls ={full.mes.url} user={user1} ></Mess>
    )
})}</div>
                     
            </div>
            {/* messege finish */}
            <div className="full"> <div  className="footer">
                <div>
            <input className="files" type="file" id="fileup" onChange={fileschange}></input>
            <label for="fileup" className="fileop"><PermMediaOutlinedIcon/></label>
                 </div>
                 <input id="in" placeholder="Type a messege" onChange={(event)=>setinput({messege:event.target.value})}></input>
                 
            

            <IconButton  className="onmj" id="onm" onClick={send}><SendRoundedIcon/></IconButton>
            
            </div></div>
           
            
       </Container>
    )
         
}

export default Chatroom;
