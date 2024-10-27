import { Outlet } from 'react-router-dom';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import Announcement from '../components/announcement/Announcement';

const Layout = () => {
	return (
		<>
			<Announcement />
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
