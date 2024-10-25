import {
	StyledCard,
	StyledImage,
	StyledContainerInfo,
	StyledPrice
} from './productCard.styles';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ section, name, price, img }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/product/${section}/${name}`);
	};

	return (
		<StyledCard onClick={handleClick}>
			<StyledImage src={img[0]} alt={name} />
			<StyledContainerInfo>
				<span>{name}</span>
				<StyledPrice>{price}</StyledPrice>
			</StyledContainerInfo>
		</StyledCard>
	);
};

export default ProductCard;
