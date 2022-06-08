import { Col, Container, Row } from 'react-bootstrap';
import './Services.css';
import CardService from './CardService'
import imgCourse1 from '../../assets/img/hbo.jpeg';
import imgCourse2 from '../../assets/img/netflix.jpeg';
import imgCourse3 from '../../assets/img/prime.jpeg';

export default function Services(){

    const servicesArray = [
        {
            title: 'HTML Course',
            subtitle: 'Lorem Ipsum',
            image: imgCourse1,
            footer: 'Go to the cours',
            link: '#!'
        },
        
        {
            title: 'Wordpress Course',
            subtitle: 'Lorem Ipsum',
            image: imgCourse2,
            footer: 'Go to the cours',
            link: '#!'
        },

        {
            title: 'React Course',
            subtitle: 'Lorem Ipsum',
            image: imgCourse3,
            footer: 'Go to the cours',
            link: '#!'
        }

    ]
    return(
        <div className="services p-4 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Services</h2>
                        <h4 className="pb-3 text-center"> Check some of my services</h4>
                        <Row xs={12} md={3} className="g-4 mt-4">
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />
                            ))}
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}