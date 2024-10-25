import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding-inline: 1.875rem;
	padding-block: 1.25rem;
`;

const StyledList = styled.ul`
	display: flex;
	gap: 2.5rem;
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
`;

const StyledMenuItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;

	&:hover ${StyledDropdownList} {
		display: block;
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
	StyledArrowIcon
};
