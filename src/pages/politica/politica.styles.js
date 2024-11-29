import styled from 'styled-components';

const StyledContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
	background-color: white;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h1`
	color: #333;
	font-size: 2rem;
`;

const StyledSubtitle = styled.h2`
	color: #555;
	font-size: 1.5rem;
`;

const StyledSection = styled.div`
	margin-bottom: 30px;
`;

const StyledParagraph = styled.p`
	color: #666;
	margin-bottom: 15px;
`;

const StyledContactInfo = styled.span`
	font-weight: bold;
`;

export {
	StyledContainer,
	StyledTitle,
	StyledSubtitle,
	StyledSection,
	StyledParagraph,
	StyledContactInfo
};
