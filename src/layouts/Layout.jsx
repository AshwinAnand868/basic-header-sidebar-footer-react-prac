import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

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