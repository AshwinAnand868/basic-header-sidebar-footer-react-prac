import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

/* 
    This component is a HOC (High order component) that takes other components as
    its parameters and renders those components as its children. Its main functionality
    is that it that it allows us to pass any component based on different routes in 
    the application and it will update accordingly without affecting its outer structure.
*/
const Layout = (Component) => ({...props}) => (
    <div>
        <Header />
        <div className='container'>
            <SideBar />
            <div className='main-container'>
                <Component {...props} />
            </div>
        </div>
        <div></div>
        <Footer/>
    </div>
);

export default Layout;