import styled from 'styled-components';

const StyledSectionTitle = styled.h1`
	background-image: url(/images/color.svg);
	background-repeat: no-repeat;
	background-position-x: 58%;
	background-position-y: center;
	background-size: 31.25rem;
	font-size: 3.75rem;
	font-weight: 600;
	margin-top: 1.25rem;

	@media (width < 768px) {
		background-size: 300px;
		font-size: 30px;
	}
`;

const StyledMainContainer = styled.div`
	padding: 1.25rem;
	text-align: center;
`;

const StyledProductFlex = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 3.125rem;
	margin-top: 1.25rem;

	@media (width < 768px) {
		gap: 1.875rem;
	}
`;

export { StyledSectionTitle, StyledMainContainer, StyledProductFlex };
