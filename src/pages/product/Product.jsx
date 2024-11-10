import { useParams } from 'react-router-dom';
import { PRODUCT_DATA } from '../../constants/product-data';
import {
	StyledButton,
	StyledContainerProduct,
	StyledForm,
	StyledFormContainer,
	StyledImg,
	StyledInfo,
	StyledInputContainer,
	StyledInput,
	StyledTextarea,
	StyledThumbnails,
	StyledModalContent,
	StyledModal,
	StyledCloseButton,
	StyledInputMail,
	StyledName,
	StyledPrice,
	StyledImageContainer,
	StyledImgBig,
	StyledException
} from './product.styles';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Product = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { section, productName } = useParams();
	const product = PRODUCT_DATA.find(
		p => p.section === section && p.name === productName
	);

	const [formValues, setFormValues] = useState({
		patas: '',
		color: '',
		pelo: '',
		detalles: ''
	});
	const [formErrors, setFormErrors] = useState({
		patas: false,
		color: false,
		pelo: false
	});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [userEmail, setUserEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [totalPrice, setTotalPrice] = useState(product?.price || 0);

	useEffect(() => {
		let newTotalPrice = product.price;
		if (formValues.patas === 'si') newTotalPrice += 3;
		if (formValues.detalles.trim()) newTotalPrice += 5;
		setTotalPrice(newTotalPrice);
	}, [formValues, product.price]);

	const patasOptions = [
		{ value: 'si', label: 'Sí (+3€)' },
		{ value: 'no', label: 'No' }
	];
	const colorOptions = [
		'Amarillo',
		'Blanco',
		'Rojo',
		'Gris',
		'Naranja',
		'Yute'
	];
	const peloOptions = [
		'Marrón oscuro',
		'Marrón claro',
		'Naranja',
		'Rojo',
		'Negro',
		'Blanco',
		'Gris',
		'Bicolor'
	];

	const [selectedImage, setSelectedImage] = useState(product?.img[0]);

	if (!product) return <div>Producto no encontrado</div>;

	const handleInputChange = e => {
		const { name, value } = e.target;
		setFormValues(prevValues => ({
			...prevValues,
			[name]: value
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();

		const errors = {
			patas: product.inputs.includes('Patas') && formValues.patas === '',
			color:
				product.inputs.includes('Color') &&
				formValues.patas === 'si' &&
				formValues.color === '',
			pelo: product.inputs.includes('Pelo') && formValues.pelo === ''
		};

		setFormErrors(errors);

		const hasErrors = Object.values(errors).some(error => error);
		if (hasErrors) return;

		setIsModalOpen(true);
	};

	const sendEmail = () => {
		if (!userEmail || !isEmailValid(userEmail)) {
			setEmailError(true);
			return;
		}

		const templateParams = {
			from_name: userEmail,
			to_name: 'artesanialascositasdelamari@gmail.com',
			subject: `Pedido de ${product.name}`,
			patas: formValues.patas,
			color: formValues.color,
			pelo: formValues.pelo,
			detalles: formValues.detalles
		};

		emailjs
			.send(
				'service_sym6y4h',
				'template_idvzf7j',
				templateParams,
				'urkRLRy5TqhfT62de'
			)
			.then(response => {
				alert('Correo enviado correctamente!');
				setIsModalOpen(false);
				setUserEmail('');
				setFormValues({ patas: '', color: '', pelo: '', detalles: '' });
			})
			.catch(err => {
				console.log('Error al enviar el correo:', err);
				alert('Hubo un error al enviar el correo.');
			});
	};

	const handleEmailChange = e => {
		setUserEmail(e.target.value);
		if (emailError && isEmailValid(e.target.value)) {
			setEmailError(false);
		}
	};

	const isEmailValid = email => {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return emailRegex.test(email);
	};

	return (
		<StyledContainerProduct>
			<StyledImageContainer>
				<StyledImgBig src={selectedImage} alt={product.name} />
				<StyledThumbnails>
					{product.img.map((image, index) => (
						<StyledImg
							key={index}
							src={image}
							alt={`Miniatura ${index + 1}`}
							onClick={() => setSelectedImage(image)}
						/>
					))}
				</StyledThumbnails>
			</StyledImageContainer>

			<StyledForm onSubmit={handleSubmit}>
				<StyledInfo>
					<StyledName>{product.name}</StyledName>
					<StyledPrice>{product.price}€</StyledPrice>
				</StyledInfo>
				<p
					dangerouslySetInnerHTML={{
						__html: product.description.replace(/\n/g, '<br />')
					}}
				/>
				<StyledFormContainer>
					{product.inputs.includes('Patas') && (
						<StyledInputContainer key='patas'>
							<label>Patas {formValues.patas === 'si' && '+3€'}</label>
							<StyledInput
								name='patas'
								value={formValues.patas}
								onChange={handleInputChange}
								error={formErrors.patas}
							>
								<option value=''>Selecciona</option>
								{patasOptions.map(option => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</StyledInput>
						</StyledInputContainer>
					)}

					{product.inputs.includes('Color') && (
						<StyledInputContainer key='color'>
							<label>Color Patas</label>
							<StyledInput
								name='color'
								value={formValues.color}
								onChange={handleInputChange}
								disabled={formValues.patas === 'no'}
								error={formErrors.color}
							>
								<option value=''>Color Patas</option>
								{colorOptions.map(color => (
									<option key={color} value={color}>
										{color}
									</option>
								))}
							</StyledInput>
						</StyledInputContainer>
					)}

					{product.inputs.includes('Pelo') && (
						<StyledInputContainer key='pelo'>
							<label>Color Pelo</label>
							<StyledInput
								name='pelo'
								value={formValues.pelo}
								onChange={handleInputChange}
								error={formErrors.pelo}
							>
								<option value=''>Color pelo</option>
								{peloOptions.map(pelo => (
									<option key={pelo} value={pelo}>
										{pelo}
									</option>
								))}
							</StyledInput>
						</StyledInputContainer>
					)}

					{product.inputs.includes('Detalles') && (
						<StyledInputContainer key='detalles'>
							<label>Detalles {formValues.detalles && '+5€'}</label>
							<StyledTextarea
								name='detalles'
								value={formValues.detalles}
								onChange={handleInputChange}
								placeholder='¿Quieres algún detalle? (+5€)'
							/>
						</StyledInputContainer>
					)}
				</StyledFormContainer>
				<StyledButton type='submit'>Enviar pedido</StyledButton>
			</StyledForm>

			{isModalOpen && (
				<StyledModal>
					<StyledModalContent>
						<StyledCloseButton onClick={() => setIsModalOpen(false)}>
							<img src='/images/cross.svg' alt='Cerrar menú' width='20' />
						</StyledCloseButton>
						<h3>Confirmación de Pedido</h3>
						{product.inputs.includes('Patas') && (
							<p>
								<strong>Patas:</strong> {formValues.patas}
							</p>
						)}

						{formValues.patas === 'si' && product.inputs.includes('Color') && (
							<p>
								<strong>Color patas:</strong> {formValues.color}
							</p>
						)}

						{product.inputs.includes('Pelo') && (
							<p>
								<strong>Pelo:</strong> {formValues.pelo}
							</p>
						)}

						{product.inputs.includes('Detalles') &&
							formValues.detalles.trim() !== '' && (
								<p>
									<strong>Detalles:</strong> {formValues.detalles}
								</p>
							)}

						<p>
							<strong>Precio:</strong> {totalPrice}€
						</p>
						<StyledException>
							{product.exception ||
								(product.section === 'tiestos' ? '*Planta no incluida' : '')}
						</StyledException>

						<label>Introduce tu correo electrónico:</label>
						<StyledInputMail
							type='email'
							value={userEmail}
							onChange={handleEmailChange}
							placeholder='Tu correo electrónico'
							className={emailError ? 'invalid' : ''}
						/>

						<StyledButton onClick={sendEmail}>Enviar correo</StyledButton>
					</StyledModalContent>
				</StyledModal>
			)}
		</StyledContainerProduct>
	);
};

export default Product;
