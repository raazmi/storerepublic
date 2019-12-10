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
                            <Col lg="4">
                                <div className="mi-service text-center">
                                    <div className="mi-service-icon">
                                        <ReactSVG src="/images/feathericons/code.svg"/>
                                    </div>
                                    <div className="mi-service-content">
                                        <h5>Web Design & Development</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi quo quas cum, ipsam minima excepturi natus.</p>
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