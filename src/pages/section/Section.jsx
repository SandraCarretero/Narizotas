import ProductCard from '../../components/productCard/ProductCard';
import { PRODUCT_DATA } from '../../constants/product-data';
import {
	StyledSectionTitle,
	StyledMainContainer,
	StyledProductFlex
} from './section.styles';

const Section = ({ section, subsection }) => {
	const products = PRODUCT_DATA.filter(product => {
		if (subsection) {
			return (
				product.section.toUpperCase() === section.toUpperCase() &&
				product.subsection.toUpperCase() === subsection.toUpperCase()
			);
		}

		return product.section.toUpperCase() === section.toUpperCase();
	});

	return (
		<StyledMainContainer>
			<StyledSectionTitle>
				{subsection ? subsection.toUpperCase() : section.toUpperCase()}
			</StyledSectionTitle>
			<StyledProductFlex>
				{products.map(product => (
					<ProductCard
						key={product.name}
						section={product.section}
						img={product.img}
						name={product.name}
						price={product.price}
					/>
				))}
			</StyledProductFlex>
		</StyledMainContainer>
	);
};

export default Section;
