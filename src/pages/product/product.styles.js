import styled, { css, keyframes } from 'styled-components';

const StyledContainerProduct = styled.div`
	display: flex;
	justify-content: center;
	gap: 3.125rem;
	padding-block: 2.5rem 5rem;

	@media (width < 768px) {
		flex-direction: column;
		align-items: center;
		gap: 0.625rem;
	}
`;

const StyledImageContainer = styled.div`
	width: 30%;

	@media (width < 768px) {
		width: 90%;
	}
`;

const StyledImgBig = styled.img`
	border-radius: 0.9375rem;
	overflow: hidden;
`;

const StyledInfo = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 0.0625rem solid black;

	@media (width < 768px) {
		display: none;
	}
`;

const StyledInfoMobile = styled(StyledInfo)`
	display: none;

	@media (width < 768px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: 25px;
		margin-bottom: 15px;
	}
`;

const StyledName = styled.span`
	font-size: 1.625rem;
	font-weight: 600;
`;

const StyledPrice = styled.span`
	font-size: 1.25rem;
`;

const StyledDescription = styled.p`
	margin-bottom: 0;
`;

const StyledThumbnails = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 10px;
`;

const StyledImg = styled.img`
	cursor: pointer;
	width: 3.125rem;
	margin: 0.3125rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	&:hover {
		border-color: black;
	}
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	width: 100%;
	max-width: 25rem;

	@media (width < 768px) {
		width: 90%;
		margin: 0 auto;
	}
`;

const StyledFormContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 0.9375rem;
`;

const StyledInputContainer = styled.div`
	width: 48%;
	&:last-child {
		width: 100%;
	}

	@media (width < 768px) {
		width: 100%;
	}
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
`;

const StyledInput = styled.select`
	-webkit-appearance: none;
	appearance: none;
	padding: 0.625rem;
	border: 0.125rem solid ${({ error }) => (error ? 'red' : '#f4a08d')};
	border-radius: 0.5rem;
	font-size: 1rem;
	color: #000;
	width: 100%;
	box-sizing: border-box;
	background-color: white;

	padding-right: 24px;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'%3E%3C/path%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: right 8px center;
	background-size: 12px;

	&:focus {
		outline: none;
		border-color: #f29382;
	}

	${({ error }) =>
		error &&
		css`
			animation: ${shake} 0.3s linear;
		`}

	&:disabled {
		background-color: #f0f0f0;
		color: #999;
		cursor: not-allowed;
		border-color: #ddd;
	}
`;

const StyledTextarea = styled.textarea`
	padding: 0.625rem;
	border: 0.125rem solid #f4a08d;
	border-radius: 0.5rem;
	font-size: 1rem;
	color: #000;
	width: 100%;
	box-sizing: border-box;
	resize: none;
	height: 6.25rem;
	text-transform: capitalize;

	&:focus {
		outline: none;
		border-color: #f29382;
	}
`;

const StyledButton = styled.button`
	padding: 0.9375rem;
	background-color: #f29382;
	color: white;
	border: none;
	border-radius: 0.5rem;
	font-size: 1rem;
	cursor: pointer;
	text-transform: uppercase;
	width: 100%;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: #e07a6a;
	}
`;

const StyledContainerModal = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	background: #0000009c;
	z-index: 10000;
	top: 0;
	left: 0;
`;

const StyledModal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 1.125rem 2rem;
	border-radius: 0.625rem;
	z-index: 1000;
	max-width: 31.25rem;
	width: 100%;
	border: 0.0625rem solid grey;

	@media (width < 768px) {
		max-width: 23.75rem;
	}
`;

const StyledModalContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3125rem;
	align-items: center;
`;

const StyledInputMail = styled.input`
	padding: 0.625rem;
	border: 0.125rem solid #f4a08d;
	border-radius: 8px;
	font-size: 16px;
	color: #000;
	width: 100%;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border-color: #f29382;
	}

	&.invalid {
		border-color: red;
		animation: shake 0.5s ease-in-out;
	}

	@keyframes shake {
		0% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-5px);
		}
		50% {
			transform: translateX(5px);
		}
		75% {
			transform: translateX(-5px);
		}
		100% {
			transform: translateX(0);
		}
	}
`;

const StyledException = styled.p`
	font-size: 0.75rem;
`;

const StyledCloseButton = styled.button`
	position: absolute;
	top: 0.625rem;
	right: 0.625rem;
	background: transparent;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
`;

const StyledPoint = styled.p`
	margin: 5px 0;
	text-transform: capitalize;
`;

export {
	StyledContainerProduct,
	StyledImageContainer,
	StyledImgBig,
	StyledInfo,
	StyledInfoMobile,
	StyledName,
	StyledPrice,
	StyledDescription,
	StyledThumbnails,
	StyledImg,
	StyledForm,
	StyledFormContainer,
	StyledInputContainer,
	StyledInput,
	StyledTextarea,
	StyledButton,
	StyledContainerModal,
	StyledModal,
	StyledInputMail,
	StyledModalContent,
	StyledException,
	StyledCloseButton,
	StyledPoint
};
