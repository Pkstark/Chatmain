import "./mess.css";
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import {Container} from "react-bootstrap";



const Mess = ({docs,user}) => {

     let type = false;
     let vtype = false;
     let mes = false;

     let u = docs.mes.username === user

 if (docs.mes.type === "image/jpeg"){
type = true;

    }


    else if(docs.mes.type === "video/mp4"){
        vtype = true;
        

    }
    else if(docs.mes.messege !== null){
        mes = true;
    }
    

    return (
        <> 
        <Container fluid className={u ? "full-1" : "full-0"} >
            <div className="full-3"> <div className="img-f">{type && <Card className={u ? "card-1" : "card-0"} >
            <CardContent className="img">
               
                <Typography>
                     {type &&<div><span>{docs.mes.username}</span><img className="imgin" src={docs.mes.url} alt="img" ></img></div> }
                </Typography>
                
            </CardContent>
        </Card> }</div>
       
        

        <div className="vid-f"> {vtype &&  <Card className={u ? "card-1" : "card-0"} >
            <CardContent className="vid">
                <Typography>
                    <span>{docs.mes.username}</span>
                </Typography>
                <Typography>
                    {vtype && <div><video className="vidn" autoSave = "true" controls type = "video/mp4" width="auto" src={docs.mes.url}></video></div> }
                </Typography>
            </CardContent>
        </Card>}</div>



       <div className="mes-1">
           {mes && <Card color="primary" className={u ? "card-1" : "card-0"}>
            <CardContent className="mes" color="primary">
                <Typography color="primary">
                {docs.mes.username}
                </Typography>
            <Typography >
                    {docs.mes.messege}
                </Typography>
            </CardContent>
        </Card>}
       
           
           </div></div>
              
           
        </Container>

     

        </>
       

    )
}

export default Mess;

 
