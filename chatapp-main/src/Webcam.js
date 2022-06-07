import React from 'react'
import "./mess.css";
import Webcam from "react-webcam";
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import {Container} from "react-bootstrap";


const Lebcam = () => {
    return (
        <div>
            <Container><Card className="web">
                <CardContent>
                    <Typography>
                        <Webcam/>
                    </Typography>
                    <Typography>
                        on progress we wil connect you soon
                    </Typography>
                </CardContent>
            </Card></Container>
            
            
        </div>
    )
}

export default Lebcam;
