import {Container, Row, Col} from 'reactstrap';
import Layout from '../components/Layouts/Layout';
import Heroslider from '../components/Heroslider';
import { ReactSVG } from 'react-svg';
import SectionTitle from '../components/SectionTitle';

function Home(props){
    return(
        <Layout>
            <div className="mi-homepage">
                <Heroslider/>
                <div className="mi-section mi-padding mi-bg-white">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <SectionTitle align="center" sectionName="Our Services" sectionHeading="Meet our best services which we provide"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="4" className="mt-30">
                                <div className="mi-service text-center">
                                    <div className="mi-service-icon">
                                        <div className="mi-service-iconbg">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498 482.4">
                                                <path d="M143.3,71.6c0,0,75.5-80.7,169.4-61.4s191.3,96.3,181.6,241.4c0,0-0.7,115.3-108.4,198.2
                                                c0,0-62.8,42.1-167.4,22.3c-104.5-19.8-180.5-93.9-180.5-93.9S-10.7,329.5,10,265.5S57.5,156.1,143.3,71.6z"/>
                                            </svg>
                                        </div>
                                        <ReactSVG className="mi-service-iconwrapper" src="/images/feathericons/code.svg"/>
                                    </div>
                                    <div className="mi-service-content">
                                        <h5>Web Design & Development</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi quo quas cum.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="mt-30">
                                <div className="mi-service text-center">
                                    <div className="mi-service-icon">
                                        <ReactSVG src="/images/feathericons/code.svg"/>
                                    </div>
                                    <div className="mi-service-content">
                                        <h5>Web Hosting</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi quo quas cum.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="mt-30">
                                <div className="mi-service text-center">
                                    <div className="mi-service-icon">
                                        <ReactSVG src="/images/feathericons/code.svg"/>
                                    </div>
                                    <div className="mi-service-content">
                                        <h5>Digital Marketing</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi quo quas cum.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default Home;