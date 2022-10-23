import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle ,FaFacebook,FaWhatsapp,FaTwitter, FaYoutube} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Caru from '../caru/Caru';
const Rightside = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"><FaGoogle></FaGoogle> Login with google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub>Login with github</Button>
            </ButtonGroup>
            <h2>Find us on</h2>
            <div>
                <ListGroup>
                   <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaYoutube></FaYoutube> youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> what`s app</ListGroup.Item>
                   
                </ListGroup>
            </div>
            <div>
                <Caru></Caru>
            </div>
        </div>
    );
};

export default Rightside;