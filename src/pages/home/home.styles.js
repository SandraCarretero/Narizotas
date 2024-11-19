import styled, { keyframes } from 'styled-components';

const sliderDesktop = keyframes`
  0%, 22%, 50%, 72%, 100% {background-image: url(/images/header.png);}
  25%, 47%, 75%, 97% {background-image: url(/images/header2.png);}
`;

const sliderMobile = keyframes`
  0%, 22%, 50%, 72%, 100% {background-image: url(/images/header_mb.png);}
  25%, 47%, 75%, 97% {background-image: url(/images/header2_mb.png);}
`;

const sliderBox = keyframes`
  0%, 22%, 50%, 72%, 100% {opacity: 1;}
  25%, 47%, 75%, 97% {opacity:0;}
`;

const StyledContainer = styled.div`
	width: 100%;
	height: calc(100vh - 3.75rem);
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(/images/header.png);
	background-size: cover;
	background-repeat: no-repeat;
	animation: ${sliderDesktop} 15s linear infinite;

	@media (width < 768px) {
		background-image: url(/images/header_mb.png);
		animation: ${sliderMobile} 15s linear infinite;
		align-items: flex-start;
  		max-width: 100%;
    		height: 100%;
	}
`;

const StyledBox = styled.div`
	height: 18.75rem;
	width: 48%;
	border-radius: 1.25rem;
	background-color: #ffffffd6;
	padding: 1.25rem 3.125rem;
	text-align: center;
	animation: ${sliderBox} 15s linear infinite;

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

export { StyledContainer, StyledBox, StyledRow, StyledText };
