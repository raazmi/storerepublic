import {Container, Row, Col} from 'reactstrap';
import Link from 'next/link';

function Login(){
    return(
        <div className="mi-loginregister tm-padding d-flex align-items-center" style={{backgroundImage: "url('/images/login-image.jpg')"}}>
            <Container>
                <div className="mi-loginregister-inner">
                    <div className="mi-loginregister-logo text-center">
                        <Link href="/index">
                            <a><img src="/images/site-logo.png" alt="site logo"/></a>
                        </Link>
                    </div>
                    <Row>
                        <Col lg="6">
                            <form action="#" className="mi-form mi-login-form">
                                <h4>Login to our site</h4>
                                <div className="mi-form-inner">
                                    <div className="form-field">
                                        <label htmlFor="login-email">Email address*</label>
                                        <input type="email" placeholder="Enter your email" id="login-email"/>
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="login-password">Password*</label>
                                        <input type="password" id="login-password" placeholder="Enter your password"/>
                                    </div>
                                    <div className="form-field">
                                        <input type="checkbox" id="login-remember"/>
                                        <label htmlFor="login-remember">Remember Me</label>
                                    </div>
                                    <div className="form-field">
                                        <button type="submit" className="mi-button">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </Col>
                        <Col lg="6">
                            <form action="#" className="mi-form mi-register-form">
                                <h4>Create a new account</h4>
                                <div className="mi-form-inner">
                                    <div className="form-field">
                                        <label htmlFor="register-name">Fullname*</label>
                                        <input type="text" placeholder="Enter your fullname" id="register-name"/>
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="register-email">Email address*</label>
                                        <input type="email" placeholder="Enter your email" id="register-email"/>
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="register-password">Password*</label>
                                        <input type="password" id="register-password" placeholder="Enter your password"/>
                                    </div>
                                    <div className="form-field">
                                        <input type="checkbox" id="register-remember"/>
                                        <label htmlFor="register-remember">Accept Terms & Conditions</label>
                                    </div>
                                    <div className="form-field">
                                        <button type="submit" className="mi-button">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
export default Login;