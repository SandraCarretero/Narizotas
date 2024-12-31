import { NavLink } from 'react-router-dom';
import Form from '../../components/form/Form';
import ProductsGrid from '../../components/productsGrid/ProductsGrid';
import Us from '../../components/us/Us';
import {
	StyledBox,
	StyledContainer,
	StyledRow,
	StyledText,
	StyledButton
} from './home.styles';

const Home = () => {
	return (
		<>
			<StyledContainer>
				<StyledBox>
					Nuestros <strong> Narizotas </strong> son piezas únicas, hechas
					artesanalmente con sumo cuidado y dedicación. Las manos expertas de
					nuestros artesanos dan vida a las figuras, añadiendo un toque de magia
					a cada detalle. <br /> Nos encanta innovar y explorar nuevos diseños.{' '}
					<br />
					¿Tienes alguna idea en mente, buscas algún regalo original? <br />
					<br />
					<strong>
						¡No dudes en contactar con nosotr@s y nos pondremos <br /> manos a
						la obra!
					</strong>
					<br /> <br />
					<StyledRow>
						<img src='/images/corazon.svg' alt='' width='30' loading="lazy"/>
						<StyledText>Hecho a mano y con mucho amor</StyledText>
						<img src='/images/corazon.svg' alt='' width='30' loading="lazy"/>
					</StyledRow>
				</StyledBox>
				<StyledButton>
					<NavLink to='/navidad'>Descúbrelos</NavLink>
				</StyledButton>
			</StyledContainer>
			<ProductsGrid />
			<Us />
			<Form />
		</>
	);
};

export default Home;
