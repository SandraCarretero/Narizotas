import { useState } from 'react';
import {
	StyledFormContainer,
	StyledTitle,
	StyledText,
	StyledForm,
	StyledInput,
	StyledTextarea,
	StyledButton,
	StyledInputMail,
	StyledMessage
} from './form.styles';

import emailjs from 'emailjs-com';

const Form = () => {
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
			subject: `Contacta con nosotros`,
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

	return (
		<StyledFormContainer>
			<StyledText>
				<StyledTitle>Contacta con nosotros</StyledTitle>
				<p>
					¿No has encontrado lo que buscabas?
					<br />
					Cuéntanos tu idea, tus dudas o tus intereses. ¡Nos pondremos en
					contacto contigo lo antes posible!
				</p>
			</StyledText>
			<StyledForm onSubmit={sendEmail}>
				{isOrderSent && !isError && (
					<StyledMessage>
						<h3>¡Muchísimas gracias!</h3>
						<p>
							Su pedido se ha enviado correctamente, a lo largo del día recibirá
							un mail con su pedido y detalles.
						</p>
						<img
							src='/images/favicon.png'
							alt='Gracias'
							width='100'
							loading='lazy'
						/>
					</StyledMessage>
				)}
				{isError && !isOrderSent && (
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
				)}
				{!isOrderSent && !isError && (
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
		</StyledFormContainer>
	);
};

export default Form;
