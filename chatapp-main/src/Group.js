import { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {Avatar}  from "@material-ui/core";
import "./group.css";


const Group = ({id,names}) => {

    const[sfeed , setsfeed] = useState("");

    useEffect(()=>{
        setsfeed(Math.floor(Math.random() *7000))
    },[])
    return (
        <div className="ggroup">
            <span><Avatar src={`https://avatars.dicebear.com/api/human/${sfeed}.svg`} /></span>
            <Link to= {`/chat/${id}/${names}`} className="link">
                {names}
                
            </Link>
        </div>
    )
}

export default Group;
