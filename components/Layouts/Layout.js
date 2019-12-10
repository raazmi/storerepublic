import Header from './Header';
import Footer from './Footer';

function Layout(props){
    return(
        <div className="mi-wrapper">
            <Header/>
                <div className="mi-pagecontent">
                    {props.children}
                </div>
            <Footer/>
        </div>
    )
}
export default Layout;