import {Container} from 'reactstrap';
import {ReactSVG} from 'react-svg';

function Heroslider(){
    return(
        <div className="mi-heroslider d-flex align-items-center" style={{backgroundImage: 'url(/images/heroslider-bg.png)'}}>
            <Container>
                <div className="mi-heroslider-inner text-center">
                    <h1 className="display-1">
                        <span className="mi-color-theme">Store </span>
                        <span class="mi-color-secondary">Republic</span>
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid velit sunt, excepturi eum, qui quia dolor animi necessitatibus ex odit accusamus libero nam iure, aspernatur esse quis doloremque officiis tenetur.</p>
                    <div className="mi-heroslider-icons">
                        <div className="single-icon">
                            <ReactSVG src="/images/feathericons/code.svg"/>
                        </div>
                        <div className="single-icon">
                            <ReactSVG src="/images/feathericons/globe.svg"/>
                        </div>
                        <div className="single-icon">
                            <ReactSVG src="/images/feathericons/code.svg"/>
                        </div>
                        <div className="single-icon">
                            <ReactSVG src="/images/feathericons/code.svg"/>
                        </div>
                        <div className="single-icon">
                            <ReactSVG src="/images/feathericons/code.svg"/>
                        </div>
                        <div className="single-icon">
                            <ReactSVG src="/images/feathericons/code.svg"/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Heroslider;