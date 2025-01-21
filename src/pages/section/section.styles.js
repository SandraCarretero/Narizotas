import styled from 'styled-components';

const StyledSectionTitle = styled.h1`
	background-image: ${({ section }) =>
		section.toUpperCase() === 'SAN VALENTIN'
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
		background-size: 18.75rem;
		font-size: 1.875rem;
	}
`;

const StyledMainContainer = styled.div`
	padding: 1.25rem;
	text-align: center;
`;

const StyledInfoContainer = styled.div`
	width: 40%;

	@media (width < 768px) {
		width: 90%;
	}
`;

const StyledForm = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	row-gap: 20px;
`;

const StyledParagraph = styled.p`
	font-size: 1.25rem;
	margin: 1.5rem auto;
	line-height: 1.6;
	text-align: left;
	color: #333;

	@media (width < 768px) {
		font-size: 1rem;
		width: 90%;
		display: none;
	}
`;

const StyledParagraphBold = styled(StyledParagraph)`
	font-weight: bold;

	@media (width < 768px) {
		display: none;
	}
`;

const StyledParagraphMobile = styled(StyledParagraph)`
	display: none;

	@media (width < 768px) {
		display: block;
	}
`;

const StyledFlex = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	gap: 2.1875rem;

	@media (width < 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

const StyledContainer = styled.div`
	display: flex;

	@media (width < 768px) {
		flex-direction: column;
	}
`;

const StyledRelative = styled.div`
	position: relative;
`;

const StyledImgBig = styled.img`
	height: 31.25rem;
	max-width: 37.5rem;
	border-radius: 0.625rem;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);

	@media (width < 768px) {
		width: 100%;
	}
`;

const StyledThumbnails = styled.div`
	display: flex;
	gap: 0.625rem;
	padding: 0.5rem;
	position: relative;

	overflow-x: auto;
	flex-direction: row;
	scroll-behavior: smooth;

	@media (width >= 768px) {
		overflow-x: hidden;
		overflow-y: auto;
		flex-direction: column;
		align-items: center;
		max-height: 31.25rem;
	}

	&::-webkit-scrollbar {
		width: 0.5rem;
		height: 0.5rem;
		background-color: #f1f1f1;
		border-radius: 0.25rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #888;
		border-radius: 4px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: #555;
	}

	img {
		width: 5rem;
		height: 5rem;
		object-fit: cover;
		border: 0.125rem solid transparent;
		border-radius: 0.3125rem;
		cursor: pointer;
		transition: transform 0.3s, border-color 0.3s;

		@media (width < 768px) {
			width: 4rem;
			height: 4rem;
		}

		&:hover {
			transform: scale(1.1);
		}

		&.active {
			border: 1px solid #ccc;
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
	StyledInfoContainer,
	StyledParagraph,
	StyledParagraphBold,
	StyledParagraphMobile,
	StyledContainer,
	StyledFlex,
	StyledRelative,
	StyledImgBig,
	StyledThumbnails,
	StyledProductFlex,
	StyledForm
};
