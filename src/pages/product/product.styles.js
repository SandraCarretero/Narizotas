import styled from 'styled-components';

const StyledContainerProduct = styled.div`
	display: flex;
	justify-content: center;
	gap: 3.125rem;
	padding-block: 2.5rem 5rem;
`;

const StyledImageContainer = styled.div`
	width: 30%;
`;

const StyledImgBig = styled.img`
	border-radius: 0.9375rem;
	overflow: hidden;
`;

const StyledInfo = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 0.0625rem solid black;
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
	gap: 20px;
	width: 100%;
	max-width: 400px;
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
`;

const StyledInput = styled.select`
	padding: 10px;
	border: 2px solid #f4a08d;
	border-radius: 8px;
	font-size: 16px;
	color: #000;
	width: 100%;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border-color: #f29382;
	}
`;

const StyledTextarea = styled.textarea`
	padding: 10px;
	border: 2px solid #f4a08d;
	border-radius: 8px;
	font-size: 16px;
	color: #000;
	width: 100%;
	box-sizing: border-box;
	resize: none;
	height: 100px;

	&:focus {
		outline: none;
		border-color: #f29382;
	}
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
	width: 100%;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: #e07a6a;
	}
`;

const StyledModal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 2rem;
	border-radius: 10px;
	z-index: 1000;
	max-width: 500px;
	width: 100%;
`;

const StyledModalContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const StyledInputMail = styled.input`
	padding: 10px;
	border: 2px solid #f4a08d;
	border-radius: 8px;
	font-size: 16px;
	color: #000;
	width: 100%;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border-color: #f29382;
	}
`;

const StyledCloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: transparent;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
`;

export {
	StyledContainerProduct,
	StyledImageContainer,
	StyledImgBig,
	StyledInfo,
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
	StyledModal,
	StyledInputMail,
	StyledModalContent,
	StyledCloseButton
};
