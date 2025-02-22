// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 1.875rem;
	padding-block: 0.3125rem;
	border-bottom: 1px solid #0000001a;

	@media (width < 768px) {
		padding-inline: 0.625rem;
	}
`;

const StyledList = styled.ul`
	display: flex;
	gap: 2.5rem;

	@media (width < 768px) {
		flex-direction: column;
		padding: 1rem;
		padding-top: 3.125rem;
	}
`;

const StyledHamburgerButton = styled.button`
	display: none;
	background: none;
	border: none;
	cursor: pointer;

	@media (width < 768px) {
		display: block;
	}
`;

const StyledMobileMenu = styled.nav`
	display: block;

	@media (width < 768px) {
		display: block;
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: white;
		box-shadow: -0.25rem 0 0.5rem rgba(0, 0, 0, 0.1);
		transform: ${({ $isOpen }) =>
			$isOpen ? 'translateX(0)' : 'translateX(100%)'};
		transition: transform 0.3s ease-in-out;
		z-index: 1000;
		padding-top: 2rem;
	}
`;

const StyledCloseButton = styled.button`
	display: none;
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 1.5rem;
	background: none;
	border: none;
	cursor: pointer;

	@media (width < 768px) {
		display: block;
	}
`;

const StyledDropdownList = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	background-color: white;
	border: 0.0625rem solid #ccc;
	padding: 0.625rem;
	display: none;
	box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
	z-index: 1000;
	width: max-content;

	@media (width < 768px) {
		width: 100%;
	}
`;

// const StyledNavLink = styled(NavLink)`
// 	color: #c90707;
// 	font-weight: 500;
//  	text-decoration-color: #c90707;
// `;

const StyledMenuItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;

	&:hover ${StyledDropdownList} {
		display: block;
	}

	@media (width < 768px) {
		margin-bottom: 1rem;
	}
`;

const StyledArrowIcon = styled.img`
	width: 0.75rem;
	height: 0.75rem;
	margin-left: 0.5rem;
	vertical-align: middle;
`;

export {
	StyledHeader,
	StyledList,
	StyledDropdownList,
	StyledMenuItem,
	StyledArrowIcon,
	StyledHamburgerButton,
	StyledMobileMenu,
	StyledCloseButton
};
