import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import Section from '../pages/section/Section';
import Product from '../pages/product/Product';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/product/:section/:productName' element={<Product />} />
				<Route path='/tiestos' element={<Section section='tiestos' />} />
				<Route
					path='/tiestos/naricillas'
					element={<Section section='tiestos' subsection='naricillas' />}
				/>
				<Route
					path='/tiestos/narigudos'
					element={<Section section='tiestos' subsection='narigudos' />}
				/>
				<Route
					path='/tiestos/narizotas'
					element={<Section section='tiestos' subsection='narizotas' />}
				/>
				<Route path='/gnomos' element={<Section section='gnomos' />} />
				<Route
					path='/gnomos/gnomos'
					element={<Section section='gnomos' subsection='gnomos' />}
				/>
				<Route
					path='/gnomos/lamparas'
					element={<Section section='gnomos' subsection='lámparas' />}
				/>
				<Route path='/hogar' element={<Section section='hogar' />} />
				<Route
					path='/hogar/lamparas'
					element={<Section section='hogar' subsection='lámparas' />}
				/>
				<Route
					path='/hogar/decoracion'
					element={<Section section='hogar' subsection='decoración' />}
				/>
				<Route
					path='/hogar/centro-mesa'
					element={<Section section='hogar' subsection='centros de mesa' />}
				/>
				<Route path='/imanes' element={<Section section='imanes' />} />
				<Route path='/eventos' element={<Section section='eventos' />} />
				<Route
					path='/personalizaciones'
					element={<Section section='personalizaciones' />}
				/>
			</Route>
		</Routes>
	);
};

export default Router;
