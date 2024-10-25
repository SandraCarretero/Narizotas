import styled from 'styled-components';

const StyledCard = styled.div`
	padding: 0.625rem;
	text-align: center;
	width: 20%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
`;

const StyledImage = styled.img`
	max-width: 100%;
	height: auto;
	border-radius: 0.9375rem;
`;

const StyledContainerInfo = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding-top: 0.9375rem;
	font-size: 1.125rem;
	font-weight: 600;
`;

const StyledPrice = styled.span`
	font-size: 1rem;
	font-weight: 500;
`;

export { StyledCard, StyledImage, StyledContainerInfo, StyledPrice };
