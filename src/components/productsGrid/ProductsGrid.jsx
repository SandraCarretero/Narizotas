import { Link } from 'react-router-dom';
import {
	StyledTitle,
	StyledBox1,
	StyledBox2,
	StyledBox3,
	StyledBox4,
	StyledBox5,
	StyledBox6,
	StyledContainerBox
} from './productsGrid.styles';

const ProductsGrid = () => {
	return (
		<>
			<StyledTitle>Nuestros Productos</StyledTitle>
			<StyledContainerBox>
				<StyledBox1>
					<Link to='/gnomos' />
				</StyledBox1>
				{/* <StyledBox2>
					<Link to='/eventos' />
				</StyledBox2> */}
				<StyledBox2>
					<Link to='/navidad' />
				</StyledBox2>
				<StyledBox3>
					<Link to='/personalizaciones' />
				</StyledBox3>
				<StyledBox4>
					<Link to='/imanes' />
				</StyledBox4>
				<StyledBox5>
					<Link to='/hogar' />
				</StyledBox5>
				<StyledBox6>
					<Link to='/tiestos' />
				</StyledBox6>
			</StyledContainerBox>
		</>
	);
};

export default ProductsGrid;
