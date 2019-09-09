import * as React from 'react';

import {
    Container,
    Row,
    Col, 
    Button,
    Card
} from 'react-bootstrap';
//Container-Library
import ViewContainer from '../../components/viewContainer/viewContainer';

//Interface
interface iHome {
    dataBlog: any;
}
interface iblog {
    idBlog: string;
    img: string;
    title: string;
    description: string;
    url: string;
}

function Home(props: iHome) {
    const {dataBlog} = props;  
    return(
        <ViewContainer>
                
            <Container className="pt-5">
                    <Row>
                {
                    dataBlog.map((blog:iblog, i:number) => {
                        return(
                            <Col key={i}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                        
                                        <Button variant="primary">Ver más</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
                </Row>
            </Container>
            
        </ViewContainer>
    )
}

export default Home;