
import './App.css';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import Home from './home';
import Chat from './chat';
import Chatroom from './Chatroom';
import Files from './service';
import Serice from './service';
import Login from './Login';
import { useSelector } from 'react-redux';
import Lebcam from './Webcam';

function App() {

  var isUser = true

  const userse = useSelector((state)=>state.count)

  if(userse === null){

    isUser = false

  }



  return (
    <>
    {!isUser ? ( <Login/>):( <BrowserRouter>
     
     <Switch>
      <Route exact path ="/">
        <Chat/>
      </Route>
      <Route exact path ="/webcam">
        <Lebcam/>
      </Route>
      <Route exact path ="/chat/:id/:id1">
         <Chatroom/>
      </Route>

      <Route exact path={"/files"}>
        <Files/>
      </Route>
      <Route exact path={"/service"}>
        <Serice/>
      </Route>
      </Switch>
      
    
   



    </BrowserRouter>
    
)}
    
    
   

    </>

  );
}

export default App;
