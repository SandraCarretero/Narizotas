import { Link } from 'react-router-dom';
import {
	StyledFooter,
	StyledContact,
	StyledPolitica,
	StyledNavLink
} from './footer.styles';

const Footer = () => {
	return (
		<StyledFooter>
			<StyledContact>
				<span>
					<u>Contacto</u>
				</span>
				<span>Email: narizotas.artesania@gmail.com</span>
				<span>Teléfono: +34 602478462</span>
				<StyledNavLink to='/politica'>
					<StyledPolitica>Política de Privacidad</StyledPolitica>
				</StyledNavLink>
			</StyledContact>
			<div>
				<Link
					to='https://www.instagram.com/narizotas.artesania'
					target='_blank'
				>
					<img src='/images/instagram.svg' alt='' width='35' loading='lazy' />
				</Link>
			</div>
		</StyledFooter>
	);
};

export default Footer;
