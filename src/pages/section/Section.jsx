import { useEffect, useMemo, useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import { PRODUCT_DATA } from '../../constants/product-data';
import {
	StyledSectionTitle,
	StyledMainContainer,
	StyledProductFlex,
	StyledParagraph,
	StyledParagraphMobile,
	StyledImgBig,
	StyledThumbnails,
	StyledFlex,
	StyledRelative,
	StyledContainer,
	StyledInfoContainer,
	StyledForm
} from './section.styles';
import {
	StyledArrowLeft,
	StyledArrowRight,
	StyledButtonArrow,
	StyledButtonContainer,
	StyledImg
} from '../product/product.styles';
import {
	StyledButton,
	StyledInput,
	StyledTextarea
} from '../../components/form/form.styles';
import emailjs from 'emailjs-com';

const Section = ({ section, subsection }) => {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userMessage, setUserMessage] = useState('');

	const sendEmail = e => {
		e.preventDefault();
		const templateParams = {
			from_name: userEmail,
			to_name: 'artesanialascositasdelamari@gmail.com',
			subject: `Personalizaciones`,
			name: userName,
			message: userMessage
		};

		emailjs
			.send(
				'service_sym6y4h',
				'template_tiey5xg',
				templateParams,
				'urkRLRy5TqhfT62de'
			)
			.then(response => {
				alert('Correo enviado correctamente!');
				setUserName('');
				setUserEmail('');
				setUserMessage('');
			})
			.catch(err => {
				console.log('Error al enviar el correo:', err);
				alert('Hubo un error al enviar el correo.');
			});
	};

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
				<StyledFlex>
					<StyledContainer>
						<StyledParagraphMobile>
							¿Quieres un Narizotas diferente? ¿Estás buscando un regalo
							original? No dudes en escribirnos y contarnos tu idea, nosotr@s
							nos encargamos de hacerlo realidad.
						</StyledParagraphMobile>
						<StyledParagraphMobile>
							<strong>
								¡Echa un vistazo a algunas de nuestras personalizaciones!
							</strong>
						</StyledParagraphMobile>
						<StyledRelative>
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
						</StyledRelative>

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
					</StyledContainer>
					<StyledInfoContainer>
						<StyledParagraph>
							¿Quieres un Narizotas diferente? ¿Estás buscando un regalo
							original? No dudes en escribirnos y contarnos tu idea, nosotr@s
							nos encargamos de hacerlo realidad.
						</StyledParagraph>
						<StyledParagraph>
							<strong>
								¡Echa un vistazo a algunas de nuestras personalizaciones!
							</strong>
						</StyledParagraph>
						<StyledForm onSubmit={sendEmail}>
							<StyledInput
								type='text'
								name='name'
								placeholder='Nombre'
								value={userName}
								onChange={e => setUserName(e.target.value)}
							/>
							<StyledInput
								type='email'
								name='email'
								placeholder='Email'
								value={userEmail}
								onChange={e => setUserEmail(e.target.value)}
							/>
							<StyledTextarea
								type='text'
								name='message'
								placeholder='Mensaje'
								value={userMessage}
								onChange={e => setUserMessage(e.target.value)}
							/>
							<StyledButton type='submit'>Enviar pedido</StyledButton>
						</StyledForm>
					</StyledInfoContainer>
				</StyledFlex>
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
