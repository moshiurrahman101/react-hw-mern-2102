import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImage from '../assets/images/rmhridoy.png'


function HeroSection() {
  return (<>
    <Container>
        <Row className='align-items-center' >
            <Col>
                <p style={{fontSize: '20px', fontWeight:'bold'}}>Hi everyone, my name is</p>
                <h1><b>Rm Hridoy</b></h1>
                <p>I'm a professional Website Developer. I'm working since 2017 with 160+ web development projects in our local marketplace. I am an expert on Javascript, ReactJs, Firebase, PHP, WordPress, and e-commerce. I like to tech people about Computer science and trending technology.</p>
            </Col>
            <Col>
                <img src={bannerImage} alt='Rm Hridoy'/>
            </Col>
        </Row>
    </Container>
  </>);
}

export default HeroSection;
