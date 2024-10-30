import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 100%;
	height: calc(100vh - 3.75rem);
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(/images/header.png);
	background-size: cover;
	background-repeat: no-repeat;

	@media (width < 768px) {
		height: calc(100vh - 9.375rem);
		align-items: flex-start;
	}
`;

const StyledBox = styled.div`
	height: 18.75rem;
	width: 48%;
	border-radius: 1.25rem;
	background-color: #ffffffd6;
	padding: 1.25rem 3.125rem;
	text-align: center;

	@media (width > 1300px) {
		height: max-content;
		font-size: 1.375rem;
		padding-block: 1.5625rem;
	}

	@media (width < 768px) {
		width: 90%;
		height: 28.25rem;
		padding: 1.25rem;
		margin-top: 4.0625rem;
	}
`;

const StyledText = styled.span`
	font-family: 'Playwrite GB S', cursive;
	font-size: 1.125rem;

	@media (width > 1300px) {
		font-size: 1.5rem;
	}
`;

export { StyledContainer, StyledBox, StyledText };
