import React from 'react';

const Meal = ({ recipes }) => {

        
    return (
			<div>
				<h4>
					{recipes.meals[0].strMeal} | {recipes.meals[0].strArea}
				</h4>
				<img src={recipes.meals[0].strMealThumb} alt='' />
				{/* <p>
					{recipes.meals[0].strMeasure1} {recipes.meals[0].strIngredient1}
				</p>
				<p>
					{recipes.meals[0].strMeasure2} {recipes.meals[0].strIngredient2}
				</p>
				<p>
					{recipes.meals[0].strMeasure3} {recipes.meals[0].strIngredient3}
				</p>
				<p>
					{recipes.meals[0].strMeasure4} {recipes.meals[0].strIngredient4}
				</p>
				<p>
					{recipes.meals[0].strMeasure5} {recipes.meals[0].strIngredient5}
				</p>
				<p>
					{recipes.meals[0].strMeasure6} {recipes.meals[0].strIngredient6}
				</p>
				<p>
					{recipes.meals[0].strMeasure7} {recipes.meals[0].strIngredient7}
				</p>
				<p>
					{recipes.meals[0].strMeasure8} {recipes.meals[0].strIngredient8}
				</p>
				<p>
					{recipes.meals[0].strMeasure9} {recipes.meals[0].strIngredient9}
				</p>
				<p>
					{recipes.meals[0].strMeasure10} {recipes.meals[0].strIngredient10}
				</p>
				<p>
					{recipes.meals[0].strMeasure11} {recipes.meals[0].strIngredient11}
				</p>
				<p>
					{recipes.meals[0].strMeasure12} {recipes.meals[0].strIngredient12}
				</p>
				<p>
					{recipes.meals[0].strMeasure13} {recipes.meals[0].strIngredient13}
				</p>
				<p>
					{recipes.meals[0].strMeasure14} {recipes.meals[0].strIngredient14}
				</p>
				<p>
					{recipes.meals[0].strMeasure15} {recipes.meals[0].strIngredient15}
				</p>
				<p>
					{recipes.meals[0].strMeasure16} {recipes.meals[0].strIngredient16}
				</p>
				<p>
					{recipes.meals[0].strMeasure17} {recipes.meals[0].strIngredient17}
				</p>
				<p>
					{recipes.meals[0].strMeasure18} {recipes.meals[0].strIngredient18}
				</p>
				<p>
					{recipes.meals[0].strMeasure19} {recipes.meals[0].strIngredient19}
				</p>
				<p>
					{recipes.meals[0].strMeasure20} {recipes.meals[0].strIngredient20}
				</p>
				<p>{recipes.meals[0].strInstructions}</p> */}
			</div>
		);
};

export default Meal;