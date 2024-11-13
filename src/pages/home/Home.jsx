import { useState, useEffect } from 'react';
import Form from '../../components/form/Form';
import ProductsGrid from '../../components/productsGrid/ProductsGrid';
import Us from '../../components/us/Us';
import { StyledBox, StyledContainer, StyledText } from './home.styles';
import { NavLink } from 'react-router-dom';

const Home = () => {
	const [currentImage, setCurrentImage] = useState('/images/header.png');
	const [showBox, setShowBox] = useState(true);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener('resize', handleResize);

		const interval = setInterval(() => {
			setCurrentImage(prevImage => {
				if (isMobile) {
					return prevImage === '/images/header_mb.png'
						? '/images/header2_mb.png'
						: '/images/header_mb.png';
				} else {
					return prevImage === '/images/header.png'
						? '/images/header2.png'
						: '/images/header.png';
				}
			});
		}, 8000);

		return () => {
			clearInterval(interval);
			window.removeEventListener('resize', handleResize);
		};
	}, [isMobile]);

	useEffect(() => {
		setShowBox(
			currentImage === '/images/header.png' ||
				currentImage === '/images/header_mb.png'
		);
	}, [currentImage]);

	const linkPath = '/navidad';

	return (
		<>
			{currentImage === '/images/header2.png' ||
			currentImage === '/images/header2_mb.png' ? (
				<NavLink to={linkPath}>
					<StyledContainer currentImage={currentImage}>
						{/* No mostramos StyledBox en header2 o header2_mb */}
					</StyledContainer>
				</NavLink>
			) : (
				<StyledContainer currentImage={currentImage}>
					{showBox && (
						<StyledBox>
							Nuestros <strong> Narizotas </strong> son piezas únicas, hechas
							artesanalmente con sumo cuidado y dedicación. Las manos expertas
							de nuestros artesanos dan vida a las figuras, añadiendo un toque
							de magia a cada detalle. <br /> Nos encanta innovar y explorar
							nuevos diseños. <br />
							¿Tienes alguna idea en mente, buscas algún regalo original? <br />
							<br />
							<strong>
								¡No dudes en contactar con nosotr@s y nos pondremos <br /> manos
								a la obra!
							</strong>
							<br /> <br />
							<StyledText>Hecho a mano y con mucho amor</StyledText>
						</StyledBox>
					)}
				</StyledContainer>
			)}
			<ProductsGrid />
			<Us />
			<Form />
		</>
	);
};

export default Home;
