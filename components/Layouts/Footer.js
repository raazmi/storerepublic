import {Container, Row, Col} from 'reactstrap';
import Link from 'next/link';

function Footer(props){
    return(
        <div className="mi-footer">
            <div className="mi-footer-top mi-padding">
                <Container>
                    <Row>
                        <Col lg="3">
                            <div className="single-widget widget-info">
                                <Link href="/index">
                                    <a className="widget-info-logo">
                                        <img src="/images/site-logo.png" alt="logo"/>
                                    </a>
                                </Link>
                                <p>Store Republic is an information technology and innovation company. We provide Domain Registration services, Enterprise class Hosting, Security Solutions. Web Design & Development, Apps Development & Digital Marketing Services.</p>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="single-widget widget-contact">
                                <h4 className="widget-title">Contact Us</h4>
                                <div className="widget-contact-inner">
                                    <Row>
                                        <Col lg="6">
                                            <h5>Bangladesh Office</h5>
                                            <address>Unit #10E, House: 10, Road: 2/2 Banani, Dhaka-1213, Bangladesh.</address>
                                            <div className="numbers">
                                                <span>Tel:</span>
                                                <p><a href="tel:+8801758068531">+88-0175 806 8531</a>,</p>
                                                <p><a href="tel:+8801735006713">+88-0173 500 6713</a>,</p>
                                                <p><a href="tel:+8801402126084">+88-0140 212 6084</a></p>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <h5>Canada Office</h5>
                                            <address>7 Roanoke Rd, North York, Ontario, Canada</address>
                                            <div className="numbers">
                                                <span>Tel:</span>
                                                <p><a href="tel:+18009156270">+1-800-915-6270 (Toll free)</a>,</p>
                                                <p><a href="tel:+14168241228">+1 416 824 1228 (Toll free)</a>,</p>
                                                <p><a href="tel:+1647297414">+1 647 297 414 (Toll free)</a></p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="single-widget widget-links">
                                <h4 className="widget-title">Quick Links</h4>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a>Terms of Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Usage Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Legal</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Faq</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mi-footer-bottom">
                <Container>
                    <div className="mi-footer-bottominner">
                        <p calssName="mi-footer-copyright">&copy;2019 <span className="mi-color-theme">Store</span> <span className="mi-color-secondary">Republic</span> All Rights Reserved. A concern of Brain Code Ltd.</p>
                        <div className="mi-footer-payment">
                            <span>We Accept:</span>
                            <img src="/images/footer-payment.png" alt="footer payment"/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer;