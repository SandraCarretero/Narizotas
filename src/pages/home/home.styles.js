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
`;

const StyledBox = styled.div`
	height: 18.75rem;
	width: 55%;
	border-radius: 1.25rem;
	background-color: #ffffffd6;
	padding: 1.875rem 3.125rem;
	text-align: center;
`;

const StyledText = styled.span`
	font-family: 'Playwrite GB S', cursive;
	font-size: 1.125rem;
`;

export { StyledContainer, StyledBox, StyledText };
