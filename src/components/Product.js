import React from 'react';
import './Product.css';
//React Context
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {
	//function to add an item to the basket fired by the button
	const [{ basket }, dispatch] = useStateValue();
	
	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating
			}
		})
	};

	
	return (
    <div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{
						Array(rating).fill().map((_) => <p>⭐</p>)
					}
			</div>
		</div>

		<img src={image} alt='product img'/>
		
		<button onClick={addToBasket}>Add to Basket</button>

    </div>
  )
}

export default Product
