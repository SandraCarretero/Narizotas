import styled from 'styled-components';

const StyledFormContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	margin: 0 auto;
	padding-block: 5rem;

	@media (width < 768px) {
		flex-direction: column;
		gap: 2.5rem;
	}
`;

const StyledText = styled.div`
	width: 40%;

	@media (width < 768px) {
		width: 100%;
	}
`;

const StyledTitle = styled.span`
	font-size: 1.5rem;
`;

const StyledForm = styled.form`
	width: 50%;
	box-shadow: 0rem 0rem 0.5rem 0.0625rem #97979778;
	border-radius: 0.625rem;
	padding: 1.25rem;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
	row-gap: 1.25rem;

	@media (width < 768px) {
		width: 100%;
	}
`;

const StyledInput = styled.input`
	width: 48%;
	min-height: 3.125rem;
	padding: 0.625rem;
	border: 0.125rem solid #f4a08d;
	border-radius: 0.5rem;
	font-size: 1rem;
	color: #000;
	box-sizing: border-box;

	@media (width < 768px) {
		width: 100%;
	}
`;

const StyledTextarea = styled.textarea`
	width: 100%;
	padding: 0.625rem;
	border: 0.125rem solid #f4a08d;
	border-radius: 0.5rem;
	font-size: 1rem;
	color: #000;
	width: 100%;
	box-sizing: border-box;
	resize: none;
	height: 6.25rem;
`;

const StyledButton = styled.button`
	padding: 15px;
	background-color: #f29382;
	color: white;
	border: none;
	border-radius: 8px;
	font-size: 16px;
	cursor: pointer;
	text-transform: uppercase;
	width: 40%;
	transition: all 0.3s ease-in-out;
	margin: 0 auto;

	&:hover {
		background-color: #e07a6a;
	}

	@media (width < 768px) {
		width: 100%;
	}
`;

export {
	StyledFormContainer,
	StyledText,
	StyledTitle,
	StyledForm,
	StyledInput,
	StyledTextarea,
	StyledButton
};
