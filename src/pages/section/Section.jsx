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
	StyledTextarea,
	StyledInputMail,
	StyledMessage
} from '../../components/form/form.styles';
import emailjs from 'emailjs-com';

const Section = ({ section, subsection }) => {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userMessage, setUserMessage] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [isOrderSent, setIsOrderSent] = useState(false);
	const [isError, setIsError] = useState(false);

	const sendEmail = e => {
		e.preventDefault();

		if (!userEmail || !isEmailValid(userEmail)) {
			setEmailError(true);
			return;
		}

		const templateParams = {
			from_name: userEmail,
			to_name: 'narizotas.artesania@gmail.com',
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
				setIsOrderSent(true);
				setIsError(false);
				setUserName('');
				setUserEmail('');
				setUserMessage('');
			})
			.catch(err => {
				setIsError(true);
				setIsOrderSent(false);
				console.log('Error al enviar el correo:', err);
			});
	};

	const handleEmailChange = e => {
		const email = e.target.value;
		setUserEmail(email);
		if (emailError && isEmailValid(email)) {
			setEmailError(false);
		}
	};

	const isEmailValid = email => {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return emailRegex.test(email);
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
							<StyledImgBig
								src={selectedImage}
								alt='Imagen principal'
								loading='lazy'
							/>

							<StyledButtonContainer>
								<StyledButtonArrow
									onClick={handlePrevImage}
									disabled={imagesPersonalizados.indexOf(selectedImage) === 0}
								>
									<StyledArrowLeft
										src='/images/arrow.svg'
										alt=''
										width='20'
										loading='lazy'
									/>
								</StyledButtonArrow>
								<StyledButtonArrow
									onClick={handleNextImage}
									disabled={
										imagesPersonalizados.indexOf(selectedImage) ===
										imagesPersonalizados.length - 1
									}
								>
									<StyledArrowRight
										src='/images/arrow.svg'
										alt=''
										width='20'
										loading='lazy'
									/>
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
									loading='lazy'
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
							{isOrderSent ? (
								<StyledMessage>
									<h3>¡Muchísimas gracias!</h3>
									<p>
										Su pedido se ha enviado correctamente, a lo largo del día
										recibirá un mail con su pedido y detalles.
									</p>
									<img
										src='/images/favicon.png'
										alt='Gracias'
										width='100'
										loading='lazy'
									/>
								</StyledMessage>
							) : isError ? (
								<StyledMessage>
									<h3>Ups... algo ha fallado</h3>
									<p>Vuelva a hacer la petición por favor.</p>
									<img
										src='/images/favicon.png'
										alt='Error'
										width='100'
										loading='lazy'
									/>
								</StyledMessage>
							) : (
								<>
									<StyledInput
										type='text'
										name='name'
										placeholder='Nombre'
										value={userName}
										onChange={e => setUserName(e.target.value)}
									/>
									<StyledInputMail
										type='email'
										name='email'
										onChange={handleEmailChange}
										placeholder='Email'
										value={userEmail}
										className={emailError ? 'invalid' : ''}
									/>
									<StyledTextarea
										type='text'
										name='message'
										placeholder='Mensaje'
										value={userMessage}
										onChange={e => setUserMessage(e.target.value)}
									/>
									<StyledButton type='submit'>Enviar pedido</StyledButton>
								</>
							)}
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
