import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Sheard/footer/Footer';
import Header from '../pages/Sheard/Header/Header';
import LeftSide from '../pages/Sheard/left-side/LeftSide';
import Rightside from '../pages/Sheard/Rightside/Rightside';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='2'>
                        <LeftSide></LeftSide>

                    </Col>

                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>

                    <Col lg='3'>
                        <Rightside></Rightside>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>


        </div>
    );
};

export default Main;