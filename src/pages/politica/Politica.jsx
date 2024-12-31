import {
	StyledContactInfo,
	StyledContainer,
	StyledParagraph,
	StyledSection,
	StyledSubtitle,
	StyledTitle
} from './politica.styles';

const Politica = () => {
	return (
		<StyledContainer>
			<StyledTitle>Política de Privacidad</StyledTitle>
			<StyledSection>
				<StyledSubtitle>1. Información que recopilamos</StyledSubtitle>
				<StyledParagraph>
					Recopilamos información que tú nos proporcionas directamente, como tu
					nombre, correo electrónico y mensajes a través de formularios de
					contacto, y datos de navegación mediante cookies.
				</StyledParagraph>
			</StyledSection>
			<StyledSection>
				<StyledSubtitle>2. Uso de la información</StyledSubtitle>
				<StyledParagraph>
					Usamos tu información para responder a tus consultas, procesar pedidos
					y mejorar tu experiencia en nuestro sitio web.
				</StyledParagraph>
			</StyledSection>
			<StyledSection>
				<StyledSubtitle>3. Compartir información</StyledSubtitle>
				<StyledParagraph>
					No compartimos, vendemos ni alquilamos tu información personal a
					terceros, excepto cuando sea necesario para cumplir con la ley o
					proporcionar servicios esenciales, como procesadores de pagos.
				</StyledParagraph>
			</StyledSection>
			<StyledSection>
				<StyledSubtitle>4. Seguridad</StyledSubtitle>
				<StyledParagraph>
					Implementamos medidas técnicas y organizativas para proteger tu
					información frente a accesos no autorizados, pérdida o divulgación.
				</StyledParagraph>
			</StyledSection>
			<StyledSection>
				<StyledSubtitle>5. Tus derechos</StyledSubtitle>
				<StyledParagraph>
					Tienes derecho a acceder, rectificar o eliminar tus datos personales
					en cualquier momento. Para ejercer estos derechos, contáctanos en{' '}
					<StyledContactInfo>narizotas.artesania@gmail.com</StyledContactInfo>.
				</StyledParagraph>
			</StyledSection>
			<StyledSection>
				<StyledSubtitle>6. Uso de cookies</StyledSubtitle>
				<StyledParagraph>
					Este sitio web utiliza cookies para mejorar la navegación y
					personalizar el contenido. Puedes desactivarlas en la configuración de
					tu navegador.
				</StyledParagraph>
			</StyledSection>
			<StyledSection>
				<StyledSubtitle>7. Cambios en esta política</StyledSubtitle>
				<StyledParagraph>
					Nos reservamos el derecho a modificar esta política de privacidad.
					Cualquier cambio será notificado en este sitio web.
				</StyledParagraph>
			</StyledSection>
			<StyledSection>
				<StyledSubtitle>8. Contacto</StyledSubtitle>
				<StyledParagraph>
					Si tienes preguntas sobre esta política, escríbenos a:
					<StyledContactInfo> narizotas.artesania@gmail.com</StyledContactInfo>.
				</StyledParagraph>
			</StyledSection>
		</StyledContainer>
	);
};

export default Politica;
