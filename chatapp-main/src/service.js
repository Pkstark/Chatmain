import React, {useState } from "react";
import { firestorage } from "./firebase";



const Serice = () => {

    const [file , setfile]  = useState(null);
    console.log(file);

        
  const hand = (event) => {

    const files = event.target.files[0];
    setfile(files)

               
          
            const storageRef=firestorage.ref(files.name);
           
            storageRef.put(files).on("state_changed",(snap)=>{
                let presentage=(snap.bytesTransferred / snap.totalBytes) * 100;
                
                console.log(presentage);
                console.log("1")
            },
            (err)=>{
                
                console.log("2")
            })

      
        }

   



    
  

    return (
        <div>
            <form onSubmit={hand}><input type = "file" onChange={hand}></input>
            <button type= "submit">submit</button>
            </form>
            
            {file && <h1>{file.name}</h1>}
          
        
        </div>
    )
}

export default Serice;
