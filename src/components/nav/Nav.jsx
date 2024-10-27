import { Link, NavLink } from 'react-router-dom';
import {
	StyledDropdownList,
	StyledHeader,
	StyledList,
	StyledMenuItem,
	StyledArrowIcon,
	StyledHamburgerButton,
	StyledMobileMenu,
	StyledCloseButton
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
					<img src='/images/logo.png' alt='Logo' width='170' />
				</Link>
			</div>
			<StyledHamburgerButton onClick={handleMenuToggle}>
				<img src='/images/hamburger.svg' alt='Menu' width='25' />
			</StyledHamburgerButton>
			<StyledMobileMenu $isOpen={isMenuOpen}>
				<StyledCloseButton onClick={() => setIsMenuOpen(false)}>
					<img src='/images/cross.svg' alt='Cerrar menú' width='20' />
				</StyledCloseButton>
				<StyledList>
					{/* Tiestos */}
					<StyledMenuItem
						{...(!isMobile && {
							onMouseEnter: () => toggleDropdown('tiestos'),
							onMouseLeave: () => toggleDropdown('tiestos')
						})}
					>
						<NavLink onClick={closeMenu} to='/tiestos'>
							Tiestos
						</NavLink>
						<StyledArrowIcon
							src='/images/arrow.svg'
							alt='flecha abajo'
							onClick={() => toggleDropdown('tiestos')}
						/>
						{dropdownVisible.tiestos && (
							<StyledDropdownList>
								<StyledMenuItem>
									<NavLink onClick={closeMenu} to='/tiestos/naricillas'>
										Naricillas
									</NavLink>
								</StyledMenuItem>
								<StyledMenuItem>
									<NavLink onClick={closeMenu} to='/tiestos/narigudos'>
										Narigudos
									</NavLink>
								</StyledMenuItem>
								<StyledMenuItem>
									<NavLink onClick={closeMenu} to='/tiestos/narizotas'>
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
					<StyledMenuItem
						{...(!isMobile && {
							onMouseEnter: () => toggleDropdown('hogar'),
							onMouseLeave: () => toggleDropdown('hogar')
						})}
					>
						<NavLink onClick={closeMenu} to='/hogar'>
							Hogar
						</NavLink>
						<StyledArrowIcon
							src='/images/arrow.svg'
							alt='flecha abajo'
							onClick={() => toggleDropdown('hogar')}
						/>
						{dropdownVisible.hogar && (
							<StyledDropdownList>
								<StyledMenuItem>
									<NavLink onClick={closeMenu} to='/hogar/lamparas'>
										Lámparas
									</NavLink>
								</StyledMenuItem>
								<StyledMenuItem>
									<NavLink onClick={closeMenu} to='/hogar/decoracion'>
										Decoración pared
									</NavLink>
								</StyledMenuItem>
								<StyledMenuItem>
									<NavLink onClick={closeMenu} to='/hogar/centro-mesa'>
										Centros de mesa
									</NavLink>
								</StyledMenuItem>
							</StyledDropdownList>
						)}
					</StyledMenuItem>
					<StyledMenuItem>
						<NavLink onClick={closeMenu} to='/imanes'>
							Imanes
						</NavLink>
					</StyledMenuItem>
					<StyledMenuItem>
						<NavLink onClick={closeMenu} to='/eventos'>
							Eventos
						</NavLink>
					</StyledMenuItem>
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
