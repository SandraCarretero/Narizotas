import { Link, NavLink } from 'react-router-dom';
import {
	StyledDropdownList,
	StyledHeader,
	StyledList,
	StyledMenuItem,
	StyledArrowIcon,
	StyledHamburgerButton,
	StyledMobileMenu,
	StyledCloseButton,
	StyledNavLink
} from './nav.styles';
import { useState } from 'react';

const Nav = () => {
	const [dropdownVisible, setDropdownVisible] = useState({});
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Detectar si el dispositivo es móvil
	const isMobile = window.innerWidth <= 768;

	const toggleDropdown = section => {
		setDropdownVisible(prev => ({
			...prev,
			[section]: !prev[section]
		}));
	};

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<StyledHeader>
			<div>
				<Link to='/'>
					<img src='/images/logo.png' alt='Logo' width='170' loading='lazy' />
				</Link>
			</div>
			<StyledHamburgerButton onClick={handleMenuToggle}>
				<img src='/images/hamburger.svg' alt='Menu' width='25' loading='lazy' />
			</StyledHamburgerButton>
			<StyledMobileMenu $isOpen={isMenuOpen}>
				<StyledCloseButton onClick={() => setIsMenuOpen(false)}>
					<img
						src='/images/cross.svg'
						alt='Cerrar menú'
						width='20'
						loading='lazy'
					/>
				</StyledCloseButton>

				<StyledList>
					<StyledMenuItem>
						<StyledNavLink onClick={closeMenu} to='/navidad'>
							Navidad
						</StyledNavLink>
					</StyledMenuItem>
					{/* Maceta */}
					<StyledMenuItem
						{...(!isMobile && {
							onMouseEnter: () => toggleDropdown('macetas'),
							onMouseLeave: () => toggleDropdown('macetas')
						})}
					>
						<NavLink onClick={closeMenu} to='/macetas'>
							Macetas
						</NavLink>
						<StyledArrowIcon
							src='/images/arrow.svg'
							alt='flecha abajo'
							loading='lazy'
							onClick={() => toggleDropdown('macetas')}
						/>
						{dropdownVisible.macetas && (
							<StyledDropdownList>
								<StyledMenuItem>
									<NavLink onClick={closeMenu} to='/macetas/naricillas'>
										Naricillas
									</NavLink>
								</StyledMenuItem>
								<StyledMenuItem>
									<NavLink onClick={closeMenu} to='/macetas/narigudos'>
										Narigudos
									</NavLink>
								</StyledMenuItem>
								<StyledMenuItem>
									<NavLink onClick={closeMenu} to='/macetas/narizotas'>
										Narizotas
									</NavLink>
								</StyledMenuItem>
							</StyledDropdownList>
						)}
					</StyledMenuItem>

					{/* Gnomos */}
					<StyledMenuItem
						{...(!isMobile && {
							onMouseEnter: () => toggleDropdown('gnomos'),
							onMouseLeave: () => toggleDropdown('gnomos')
						})}
					>
						<NavLink onClick={closeMenu} to='/gnomos'>
							Gnomos
						</NavLink>
						<StyledArrowIcon
							src='/images/arrow.svg'
							alt='flecha abajo'
							loading='lazy'
							onClick={() => toggleDropdown('gnomos')}
						/>
						{dropdownVisible.gnomos && (
							<StyledDropdownList>
								<StyledMenuItem>
									<NavLink onClick={closeMenu} to='/gnomos/gnomos'>
										Gnomos
									</NavLink>
								</StyledMenuItem>
								<StyledMenuItem>
									<NavLink onClick={closeMenu} to='/gnomos/lamparas'>
										Lámparas
									</NavLink>
								</StyledMenuItem>
							</StyledDropdownList>
						)}
					</StyledMenuItem>

					{/* Hogar */}
					<StyledMenuItem>
						<NavLink onClick={closeMenu} to='/hogar'>
							Hogar
						</NavLink>
					</StyledMenuItem>
					<StyledMenuItem>
						<NavLink onClick={closeMenu} to='/imanes'>
							Imanes
						</NavLink>
					</StyledMenuItem>
					{/* <StyledMenuItem>
						<NavLink onClick={closeMenu} to='/eventos'>
							Eventos
						</NavLink>
					</StyledMenuItem> */}
					<StyledMenuItem>
						<NavLink onClick={closeMenu} to='/personalizaciones'>
							Personalizaciones
						</NavLink>
					</StyledMenuItem>
				</StyledList>
			</StyledMobileMenu>
		</StyledHeader>
	);
};

export default Nav;
