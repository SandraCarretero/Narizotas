import { useState } from 'react';
import {
	StyledFormContainer,
	StyledTitle,
	StyledText,
	StyledForm,
	StyledInput,
	StyledTextarea,
	StyledButton
} from './form.styles';

import emailjs from 'emailjs-com';

const Form = () => {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userMessage, setUserMessage] = useState('');

	const sendEmail = e => {
		e.preventDefault();
		const templateParams = {
			from_name: userEmail,
			to_name: 'artesanialascositasdelamari@gmail.com',
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
		</StyledFormContainer>
	);
};

export default Form;
