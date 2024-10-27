import styled from 'styled-components';

const StyledBandColor = styled.div`
	margin-top: 3.125rem;
	background-color: #f8e2cf;
	padding-block: 2.1875rem;
	display: flex;
	justify-content: space-evenly;

	@media (width < 768px) {
		flex-direction: column;
		gap: 2.5rem;
	}
`;

const StyledContainerIcon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const StyledIcon = styled.img`
	height: 3.75rem;
`;

const StyledTitleIcon = styled.span`
	font-size: 1.25rem;
	font-weight: 600;
	margin-top: 1.25rem;
`;

export { StyledBandColor, StyledContainerIcon, StyledIcon, StyledTitleIcon };
