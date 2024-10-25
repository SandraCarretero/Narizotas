import { Link, NavLink } from 'react-router-dom';
import {
	StyledDropdownList,
	StyledHeader,
	StyledList,
	StyledMenuItem,
	StyledArrowIcon
} from './nav.styles';
import { useState } from 'react';

const Nav = () => {
	const [dropdownVisible, setDropdownVisible] = useState({});

	const toggleDropdown = section => {
		setDropdownVisible(prev => ({
			...prev,
			[section]: !prev[section]
		}));
	};

	return (
		<StyledHeader>
			<div>
				<Link to='/'>
					<img src='' alt='Logo' />
				</Link>
			</div>
			<nav>
				<StyledList>
					<StyledMenuItem
						onMouseEnter={() => toggleDropdown('tiestos')}
						onMouseLeave={() => toggleDropdown('tiestos')}
					>
						<NavLink to='/tiestos'>Tiestos</NavLink>
						<StyledArrowIcon src='/images/arrow.svg' alt='flecha abajo' />
						{dropdownVisible.tiestos && (
							<StyledDropdownList>
								<StyledMenuItem>
									<NavLink to='/tiestos/naricillas'>Naricillas</NavLink>
								</StyledMenuItem>
								<StyledMenuItem>
									<NavLink to='/tiestos/narigudos'>Narigudos</NavLink>
								</StyledMenuItem>
								<StyledMenuItem>
									<NavLink to='/tiestos/narizotas'>Narizotas</NavLink>
								</StyledMenuItem>
							</StyledDropdownList>
						)}
					</StyledMenuItem>
					<StyledMenuItem
						onMouseEnter={() => toggleDropdown('gnomos')}
						onMouseLeave={() => toggleDropdown('gnomos')}
					>
						<NavLink to='/gnomos'>Gnomos</NavLink>
						<StyledArrowIcon src='/images/arrow.svg' alt='flecha abajo' />
						{dropdownVisible.gnomos && (
							<StyledDropdownList>
								<StyledMenuItem>
									<NavLink to='/gnomos/gnomos'>Gnomos</NavLink>
								</StyledMenuItem>
								<StyledMenuItem>
									<NavLink to='/gnomos/lamparas'>Lámparas</NavLink>
								</StyledMenuItem>
							</StyledDropdownList>
						)}
					</StyledMenuItem>

					<StyledMenuItem
						onMouseEnter={() => toggleDropdown('hogar')}
						onMouseLeave={() => toggleDropdown('hogar')}
					>
						<NavLink to='/hogar'>Hogar</NavLink>
						<StyledArrowIcon src='/images/arrow.svg' alt='flecha abajo' />
						{dropdownVisible.hogar && (
							<StyledDropdownList>
								<StyledMenuItem>
									<NavLink to='/hogar/lamparas'>Lámparas</NavLink>
								</StyledMenuItem>
								<StyledMenuItem>
									<NavLink to='/hogar/decoracion'>Decoración pared</NavLink>
								</StyledMenuItem>
								<StyledMenuItem>
									<NavLink to='/hogar/centro-mesa'>Centros de mesa</NavLink>
								</StyledMenuItem>
							</StyledDropdownList>
						)}
					</StyledMenuItem>
					<StyledMenuItem>
						<NavLink to='/imanes'>Imanes</NavLink>
					</StyledMenuItem>
					<StyledMenuItem>
						<NavLink to='/eventos'>Eventos</NavLink>
					</StyledMenuItem>
					<StyledMenuItem>
						<NavLink to='/personalizaciones'>Personalizaciones</NavLink>
					</StyledMenuItem>
				</StyledList>
			</nav>
		</StyledHeader>
	);
};

export default Nav;
