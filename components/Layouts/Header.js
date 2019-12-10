import {Container} from 'reactstrap';
import { ReactSVG } from 'react-svg';
import Link from 'next/link';

function Header(props){
    return(
        <div className="mi-header">
            <div className="mi-header-topside">
                <Container>
                    <div className="mi-header-topinner">
                        
                    </div>
                </Container>
            </div>
            <div className="mi-header-bottomside">
                <Container>
                    <div className="mi-header-inner">
                        <Link href="/index">
                            <a className="mi-header-logo">
                                <img src="/images/site-logo.png" alt="logo"/>
                            </a>
                        </Link>
                        <nav className="mi-header-menu">
                            <ul>
                                <li>
                                    <Link href="/index">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <a>Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolios">
                                        <a>Portfolios</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="mi-header-buttons">
                            <ul>
                                <li>
                                    <button>
                                        <ReactSVG src="/images/feathericons/search.svg" />
                                    </button>
                                </li>
                                <li>
                                    <Link href="/login">
                                        <a>
                                            <ReactSVG src="/images/feathericons/user.svg" />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Header;