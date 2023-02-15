import { Outlet } from 'react-router-dom';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

const SharedLayout = () => {
  return (
    <div className="App" >
        <Nav />
        <section>
            <Outlet />
        </section>
        <Footer />
    </div>
  )
}

export default SharedLayout