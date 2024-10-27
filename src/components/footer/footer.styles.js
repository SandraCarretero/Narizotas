import styled from 'styled-components';

const StyledFooter = styled.footer`
	background-color: #4c4c4c;
	color: white;
	padding-block: 1.25rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 2.5rem;

	@media (width < 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 2.5rem;
	}
`;

const StyledContact = styled.div`
	display: flex;
	flex-direction: column;
`;

export { StyledFooter, StyledContact };
