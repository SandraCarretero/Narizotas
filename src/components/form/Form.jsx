import {
	StyledFormContainer,
	StyledTitle,
	StyledText,
	StyledForm,
	StyledInput,
	StyledTextarea,
	StyledButton
} from './form.styles';

const Form = () => {
	return (
		<StyledFormContainer>
			<StyledText>
				<StyledTitle>Contacta con nosotros</StyledTitle>
				<p>
					¿No has encontrado lo que buscabas?
					<br />
					Cuéntanos tu idea, tus dudas o tus intereses. ¡Nos pondremos en
					contacto contigo lo antes posible
				</p>
			</StyledText>
			<StyledForm>
				<StyledInput type='text' placeholder='Nombre' />
				<StyledInput type='email' placeholder='Email' />
				<StyledTextarea type='text' placeholder='Mensaje' />
				<StyledButton type='submit'>Enviar pedido</StyledButton>
			</StyledForm>
		</StyledFormContainer>
	);
};

export default Form;
