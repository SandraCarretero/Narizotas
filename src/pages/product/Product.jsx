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
	StyledImgBig
} from './product.styles';
import { useState } from 'react';
import emailjs from 'emailjs-com';
const Product = () => {
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

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [userEmail, setUserEmail] = useState('');

	const patasOptions = ['Sí', 'No'];
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
		setIsModalOpen(true);
	};

	const sendEmail = () => {
		if (!userEmail) {
			alert('Por favor, introduce tu correo electrónico.');
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
					<StyledPrice>{product.price}</StyledPrice>
				</StyledInfo>
				<p>{product.description}</p>
				<StyledFormContainer>
					{product.inputs.map(input => (
						<StyledInputContainer key={input}>
							<label>{input}</label>
							{input === 'Patas' && (
								<StyledInput
									name='patas'
									value={formValues.patas}
									onChange={handleInputChange}
								>
									<option value=''>Patas</option>
									{patasOptions.map(patas => (
										<option key={patas} value={patas}>
											{patas}
										</option>
									))}
								</StyledInput>
							)}

							{input === 'Color' && (
								<StyledInput
									name='color'
									value={formValues.color}
									onChange={handleInputChange}
								>
									<option value=''>Color</option>
									{colorOptions.map(color => (
										<option key={color} value={color}>
											{color}
										</option>
									))}
								</StyledInput>
							)}

							{input === 'Pelo' && (
								<StyledInput
									name='pelo'
									value={formValues.pelo}
									onChange={handleInputChange}
								>
									<option value=''>Color pelo</option>
									{peloOptions.map(pelo => (
										<option key={pelo} value={pelo}>
											{pelo}
										</option>
									))}
								</StyledInput>
							)}

							{input === 'Detalles' && (
								<StyledTextarea
									name='detalles'
									value={formValues.detalles}
									onChange={handleInputChange}
									placeholder='¿Quieres algún detalle?'
								/>
							)}
						</StyledInputContainer>
					))}
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
						<p>
							<strong>Patas:</strong> {formValues.patas}
						</p>
						<p>
							<strong>Color:</strong> {formValues.color}
						</p>
						<p>
							<strong>Pelo:</strong> {formValues.pelo}
						</p>
						<p>
							<strong>Detalles:</strong> {formValues.detalles}
						</p>

						<label>Introduce tu correo electrónico:</label>
						<StyledInputMail
							type='email'
							value={userEmail}
							onChange={e => setUserEmail(e.target.value)}
							placeholder='Tu correo electrónico'
						/>

						<StyledButton onClick={sendEmail}>Enviar al correo</StyledButton>
					</StyledModalContent>
				</StyledModal>
			)}
		</StyledContainerProduct>
	);
};

export default Product;
