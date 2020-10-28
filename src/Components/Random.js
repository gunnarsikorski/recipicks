import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import './Styling/Random.css'
// import Meal from './Meal';

const Random = () => {
	const [recipes, setRecipes] = useState('');

	useEffect(() => {
		handleClick();
	}, []);

	const handleClick = () => {
		const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				let recipes = res;
				setRecipes(recipes);
			})
			.catch((error) => console.log(error));
	};

	if (!recipes) {
		return <p>Loading...</p>;
	}

	return (
		<Jumbotron>
			<Container>
				<Button
					onClick={handleClick}
					variant='dark'
					size='lg'
					block
					cursor='pointer'
					style={{ marginBottom: '3rem', marginTop: '-1.5rem' }}>
					Find another!
				</Button>
				<Row>
					<Col xs={6} md={7}>
						<Card body bg={'light'} border={'dark'}>
							<h4 style={{borderBottom: 'solid', borderWidth: 'thin', paddingBottom: '.66rem'}}>{recipes.meals[0].strMeal}</h4>

                            <h5 style={{ fontStyle: 'italic', fontWeight: '300', marginBottom: '1.5rem'}}>
								{recipes.meals[0].strArea}
							</h5>
							<Image rounded src={recipes.meals[0].strMealThumb} fluid />
						</Card>
					</Col>
					<Col>
						<Card body bg={'light'} border={'dark'}>
                            <h5 style={{marginBottom: '1rem'}}>Ingredients:</h5>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure1} {recipes.meals[0].strIngredient1}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure2} {recipes.meals[0].strIngredient2}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure3} {recipes.meals[0].strIngredient3}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure4}  {recipes.meals[0].strIngredient4}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure5}  {recipes.meals[0].strIngredient5}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure6}  {recipes.meals[0].strIngredient6}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure7} {recipes.meals[0].strIngredient7}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure8}  {recipes.meals[0].strIngredient8}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure9} {recipes.meals[0].strIngredient9}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure10}{' '}
								{recipes.meals[0].strIngredient10}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure11}{' '}
								{recipes.meals[0].strIngredient11}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure12}{' '}
								{recipes.meals[0].strIngredient12}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure13}{' '}
								{recipes.meals[0].strIngredient13}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure14}{' '}
								{recipes.meals[0].strIngredient14}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure15}{' '}
								{recipes.meals[0].strIngredient15}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure16}{' '}
								{recipes.meals[0].strIngredient16}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure17}{' '}
								{recipes.meals[0].strIngredient17}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure18}{' '}
								{recipes.meals[0].strIngredient18}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure19}{' '}
								{recipes.meals[0].strIngredient19}
							</p>
							<p style={{ marginBottom: '.2rem' }}>
								{recipes.meals[0].strMeasure20}{' '}
								{recipes.meals[0].strIngredient20}
							</p>
						</Card>
					</Col>
				</Row>
				<p style={{ marginTop: '2rem' }}>{recipes.meals[0].strInstructions}</p>

				{/* <Route path='/meal' render={(routerProps)=> {
                    return (
                        <Meal
                            recipes={recipes}
                        />
                    )
                }} /> */}
			</Container>
		</Jumbotron>
	);
};

export default Random;
