import {
	StyledBandColor,
	StyledContainerIcon,
	StyledIcon,
	StyledTitleIcon
} from './us.styles';

const Us = () => {
	return (
		<StyledBandColor>
			<StyledContainerIcon>
				<StyledIcon src='/images/ico_01.svg' alt='' />
				<StyledTitleIcon>Envíanos tu idea</StyledTitleIcon>
				<span>
					Captamos lo que quieres
					<br />y diseñamos una figura
					<br />
					única para ti.
				</span>
			</StyledContainerIcon>
			<StyledContainerIcon>
				<StyledIcon src='/images/ico_02.svg' alt='' />
				<StyledTitleIcon>No habrá 2 igual</StyledTitleIcon>
				<span>
					Todas las figuras son
					<br />
					hechas a mano,
					<br />
					son únicas.
				</span>
			</StyledContainerIcon>
			<StyledContainerIcon>
				<StyledIcon src='/images/ico_03.svg' alt='' />
				<StyledTitleIcon>¡Sorpresa!</StyledTitleIcon>
				<span>
					Decora tus celebraciones con
					<br />
					gomos únicos para bodas,
					<br />
					comuniones y más.
				</span>
			</StyledContainerIcon>
		</StyledBandColor>
	);
};

export default Us;
