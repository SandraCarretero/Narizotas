import styled from 'styled-components';

const StyledAnnouncement = styled.div`
	width: 100%;
	height: 2.5rem;
	background-color: #f29382;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;

    @media (width < 768px) {
		padding-inline: 2.5rem;
        text-align: center;
        height: 4.375rem;
	}
`;

export { StyledAnnouncement };
