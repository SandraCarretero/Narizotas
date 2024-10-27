import styled from 'styled-components';

const StyledTitle = styled.h1`
	text-align: center;
	font-size: 2.8125rem;
	padding-block: 1.25rem;

	@media (width < 768px) {
		font-size: 1.875rem;
	}
`;

const StyledContainerBox = styled.div`
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: repeat(11, 1fr);
	gap: 1.25rem;
	height: 43.75rem;
	width: 75%;
	margin: 0 auto;

	@media (width > 1300px) {
		height: 60rem;
	}
	@media (width < 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: max-content;
	}
`;

const StyledBox = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 1.875rem;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	:before {
		opacity: 0;
		position: absolute;
		bottom: 1rem;
		left: 1.5rem;
		z-index: 10;
		color: white;
		font-size: 1.5625rem;
		transition: opacity 0.3s ease-in-out;
	}

	:after {
		opacity: 0;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		transition: opacity 0.3s ease-in-out;
	}

	&:hover {
		:before {
			opacity: 1;
		}
		:after {
			opacity: 1;
		}
	}

	@media (width < 768px) {
		width: 85%;
		height: 12.5rem;
		margin-bottom: 1rem;

		:before,
		:after {
			opacity: 1;
		}

		:after {
			background-image: linear-gradient(
				-180deg,
				rgba(86, 178, 128, 0) 0%,
				rgba(86, 178, 128, 0.8) 100%
			) !important;
		}
	}
`;

const StyledBox1 = styled(StyledBox)`
	grid-column: span 4 / span 4;
	grid-row: span 7 / span 7;
	background-image: url(/images/grid-1.png);

	:after {
		background-image: linear-gradient(
			-180deg,
			rgba(86, 178, 128, 0) 0%,
			rgba(86, 178, 128, 0.8) 100%
		);
	}

	:before {
		content: 'GNOMOS';
	}
`;

const StyledBox2 = styled(StyledBox)`
	grid-column: span 3 / span 3;
	grid-row: span 4 / span 4;
	grid-column-start: 1;
	grid-row-start: 8;
	background-image: url(/images/grid-2.png);

	:after {
		background-image: linear-gradient(
			-180deg,
			rgba(86, 178, 128, 0) 0%,
			rgba(86, 178, 128, 0.8) 100%
		);
	}

	:before {
		content: 'EVENTOS';
	}
`;

const StyledBox3 = styled(StyledBox)`
	grid-column: span 7 / span 7;
	grid-row: span 4 / span 4;
	grid-column-start: 4;
	grid-row-start: 8;
	background-image: url(/images/grid-3.png);
	:after {
		background-image: linear-gradient(
			-90deg,
			rgba(86, 178, 128, 0) 0%,
			rgba(86, 178, 128, 0.8) 100%
		);
	}

	:before {
		content: 'PERSONALIZACIONES';
	}
`;

const StyledBox4 = styled(StyledBox)`
	grid-column: span 3 / span 3;
	grid-row: span 4 / span 4;
	grid-column-start: 5;
	grid-row-start: 4;
	background-image: url(/images/grid-4.png);

	:after {
		background-image: linear-gradient(
			-180deg,
			rgba(86, 178, 128, 0) 0%,
			rgba(86, 178, 128, 0.8) 100%
		);
	}

	:before {
		content: 'IMANES';
	}
`;

const StyledBox5 = styled(StyledBox)`
	grid-column: span 3 / span 3;
	grid-row: span 4 / span 4;
	grid-column-start: 8;
	grid-row-start: 4;
	background-image: url(/images/grid-5.png);

	:after {
		background-image: linear-gradient(
			-180deg,
			rgba(86, 178, 128, 0) 0%,
			rgba(86, 178, 128, 0.8) 100%
		);
	}

	:before {
		content: 'HOGAR';
	}
`;

const StyledBox6 = styled(StyledBox)`
	grid-column: span 6 / span 6;
	grid-row: span 3 / span 3;
	grid-column-start: 5;
	grid-row-start: 1;
	background-image: url(/images/grid-6.png);

	:after {
		background-image: linear-gradient(
			-180deg,
			rgba(86, 178, 128, 0) 0%,
			rgba(86, 178, 128, 0.8) 100%
		);
	}

	:before {
		content: 'TIESTOS';
	}
`;

export {
	StyledTitle,
	StyledContainerBox,
	StyledBox1,
	StyledBox2,
	StyledBox3,
	StyledBox4,
	StyledBox5,
	StyledBox6
};
