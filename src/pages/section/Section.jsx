import { useEffect, useMemo, useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import { PRODUCT_DATA } from '../../constants/product-data';
import {
	StyledSectionTitle,
	StyledMainContainer,
	StyledProductFlex,
	StyledParagraph,
	StyledImgBig,
	StyledThumbnails,
	StyledFlex
} from './section.styles';
import {
	StyledArrowLeft,
	StyledArrowRight,
	StyledButtonArrow,
	StyledButtonContainer,
	StyledImg
} from '../product/product.styles';

const Section = ({ section, subsection }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handlePrevImage = () => {
		const currentIndex = imagesPersonalizados.indexOf(selectedImage);
		if (currentIndex > 0) {
			setSelectedImage(imagesPersonalizados[currentIndex - 1]);
		}
	};

	const handleNextImage = () => {
		const currentIndex = imagesPersonalizados.indexOf(selectedImage);
		if (currentIndex < imagesPersonalizados.length - 1) {
			setSelectedImage(imagesPersonalizados[currentIndex + 1]);
		}
	};

	const products = useMemo(
		() =>
			PRODUCT_DATA.filter(product => {
				if (subsection) {
					return (
						product.section.toUpperCase() === section.toUpperCase() &&
						product.subsection.toUpperCase() === subsection.toUpperCase()
					);
				}
				return product.section.toUpperCase() === section.toUpperCase();
			}),
		[section, subsection]
	);

	const imagesPersonalizados = useMemo(() => {
		const personalizadoProduct = products.find(
			product => product.section.toUpperCase() === 'PERSONALIZACIONES'
		);
		return personalizadoProduct ? personalizadoProduct.img : [];
	}, [products]);

	const [selectedImage, setSelectedImage] = useState(imagesPersonalizados[0]);

	useEffect(() => {
		if (imagesPersonalizados.length > 0) {
			setSelectedImage(imagesPersonalizados[0]);
		}
	}, [imagesPersonalizados]);

	return (
		<StyledMainContainer>
			<StyledSectionTitle section={section}>
				{subsection ? subsection.toUpperCase() : section.toUpperCase()}
			</StyledSectionTitle>
			{/* Contenido personalizado para Personalizaciones */}
			{section.toUpperCase() === 'PERSONALIZACIONES' ? (
				<>
					<StyledParagraph>
						¿Quieres un Narizotas diferente? ¿Estás buscando un regalo original?{' '}
						No dudes en escribirnos y contarnos tu idea, nosotr@s nos encargamos
						de hacerlo realidad.
					</StyledParagraph>
					<StyledFlex>
						<StyledImgBig src={selectedImage} alt='Imagen principal' />

						<StyledButtonContainer>
							<StyledButtonArrow
								onClick={handlePrevImage}
								disabled={imagesPersonalizados.indexOf(selectedImage) === 0}
							>
								<StyledArrowLeft src='/images/arrow.svg' alt='' width='20' />
							</StyledButtonArrow>
							<StyledButtonArrow
								onClick={handleNextImage}
								disabled={
									imagesPersonalizados.indexOf(selectedImage) ===
									imagesPersonalizados.length - 1
								}
							>
								<StyledArrowRight src='/images/arrow.svg' alt='' width='20' />
							</StyledButtonArrow>
						</StyledButtonContainer>

						<StyledThumbnails>
							{imagesPersonalizados.map((image, index) => (
								<StyledImg
									key={index}
									src={image}
									alt={`Miniatura ${index + 1}`}
									onClick={() => setSelectedImage(image)}
									className={selectedImage === image ? 'active' : ''}
								/>
							))}
						</StyledThumbnails>
					</StyledFlex>
				</>
			) : (
				<StyledProductFlex>
					{products.map(product => (
						<ProductCard
							key={product.name}
							section={product.section}
							img={product.img}
							name={product.name}
							price={product.price}
						/>
					))}
				</StyledProductFlex>
			)}
		</StyledMainContainer>
	);
};

export default Section;
