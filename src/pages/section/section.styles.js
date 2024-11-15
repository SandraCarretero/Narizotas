import styled from 'styled-components';

const StyledSectionTitle = styled.h1`
	background-image: ${({ section }) =>
		section.toUpperCase() === 'NAVIDAD'
			? 'url(/images/color_navidad.svg)'
			: 'url(/images/color.svg)'};
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

const StyledParagraph = styled.p`
	font-size: 1.25rem;
	margin: 1.5rem 0;
	line-height: 1.6;
	text-align: center;
	color: #333;

	@media (width < 768px) {
		font-size: 1rem;
	}
`;

const StyledImgBig = styled.img`
	width: 100%;
	max-width: 600px;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	margin-bottom: 1rem;
`;

const StyledThumbnails = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;

	img {
		width: 80px;
		height: 80px;
		object-fit: cover;
		border: 2px solid transparent;
		border-radius: 5px;
		cursor: pointer;
		transition: transform 0.3s, border-color 0.3s;

		&:hover {
			transform: scale(1.1);
		}

		&.active {
			border-color: #ff4500;
		}
	}
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

export {
	StyledSectionTitle,
	StyledMainContainer,
	StyledParagraph,
	StyledImgBig,
	StyledThumbnails,
	StyledProductFlex
};
