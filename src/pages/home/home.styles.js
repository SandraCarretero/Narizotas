import styled, { keyframes } from 'styled-components';

const sliderDesktop = keyframes`
  0%, 47%, 100% {background-image: url(/images/header.webp);}
  50%, 97% {background-image: url(/images/header2.webp);}
`;

const sliderMobile = keyframes`
  0%, 47%, 100% {background-image: url(/images/header_mb.webp);}
  50%, 97% {background-image: url(/images/header2_mb.webp);}
`;

const sliderBox = keyframes`
  0%, 47%, 100% {opacity: 1;}
  50%, 97%  {opacity:0;}
`;

const sliderButton = keyframes`
  0%, 47%, 100% {opacity: 0;}
  50%, 97%  {opacity:1;}
`;

const StyledContainer = styled.div`
	width: 100%;
	height: calc(100vh - 3.75rem);
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(/images/header.webp);
	background-size: cover;
	background-repeat: no-repeat;
	animation: ${sliderDesktop} 10s linear infinite;

	@media (width < 768px) {
		background-image: url(/images/header_mb.webp);
		animation: ${sliderMobile} 10s linear infinite;
		align-items: flex-start;
		max-width: 100%;
		height: 100%;
		background-position-x: center;
		position: relative;
		background-size: cover;
	}
`;

const StyledBox = styled.div`
	height: 18.75rem;
	width: 48%;
	border-radius: 1.25rem;
	background-color: #ffffffd6;
	padding: 1.25rem 3.125rem;
	text-align: center;
	animation: ${sliderBox} 10s linear infinite;

	@media (width > 1300px) {
		height: max-content;
		font-size: 1.375rem;
		padding-block: 1.5625rem;
	}

	@media (width < 768px) {
		width: 90%;
		height: max-content;
		padding: 1.25rem;
		margin-block: 4.0625rem;
	}
`;

const StyledRow = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledText = styled.span`
	font-family: 'Playwrite GB S', cursive;
	font-size: 1.125rem;

	@media (width > 1300px) {
		font-size: 1.25rem;
	}
`;

const StyledButton = styled.button`
	position: absolute;
	bottom: 24%;
	right: 19%;
	padding: 15px;
	background-color: white;
	color: #c90707;
	border: none;
	border-radius: 8px;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	text-transform: uppercase;
	animation: ${sliderButton} 10s linear infinite;

	@media (width < 1300px) {
		bottom: 18%;
		right: 17%;
	}

	@media (width < 768px) {
		top: 28%;
		bottom: initial;
		right: 10%;
	}
`;

export { StyledContainer, StyledBox, StyledRow, StyledText, StyledButton };
