import {Container} from 'reactstrap';
import Layout from '../components/Layouts/Layout';

function Portfolios(props){
    return(
        <Layout>
            <div className="mi-breadcrumb-area mi-padding mi-bg-grey">
                <Container>
                    <div className="mi-breadcrumb text-center">
                        <h2>Portfolio Page</h2>
                    </div>
                </Container>
            </div>
            <div className="mi-padding"></div>
        </Layout>
    )
}

export default Portfolios;