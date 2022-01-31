import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

function Blog() {
    const [postData, setPostData] = useState([])
    const [photoData, setPhotoData] = useState([])
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((posts)=>{
            setPostData(posts.data);
        });
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((photo)=>{
            setPhotoData(photo.data)
        });
    },[]);


  return (
    <Container>
        <h1>Read my blog</h1>
        <Row>
            {
                postData.map((post)=>(
                    <Col lg={3} key={post.id}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={photoData[post.id].thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                {post.body}
                                </Card.Text>
                                <Button variant="primary">Read Full Article</Button>
                            </Card.Body>
                        </Card>
                    </Col>      
                ))
            }
        </Row>
    </Container>
  );
}

export default Blog;
