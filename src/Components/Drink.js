import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


const Drink = () => {
    const [drink, setDrink] = useState('');

		useEffect(() => {
			handleClick();
		}, []);

		const handleClick = () => {
			const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					let drink = res;
					setDrink(drink);
				})
				.catch((error) => console.log(error));
		};

		if (!drink) {
			return <p>Loading...</p>;
		}
    return (
			<>
				<Jumbotron>
					<Container>
						<Button
							onClick={handleClick}
							variant='dark'
							size='lg'
							block
							style={{ marginBottom: '3rem', marginTop: '-1.5rem' }}>
							Find another drink!
						</Button>
						<Card.Body
							style={{
								border: 'solid',
								borderWidth: 'thin',
								borderRadius: '10px',
								marginTop: '1rem',
								padding: '2.5rem',
							}}>
							<Row>
								<Col>
									<Card body bg={'light'} border={'dark'}>
										<h4
											style={{
												borderBottom: 'solid',
												borderWidth: 'thin',
												paddingBottom: '.66rem',
											}}>
											{drink.drinks[0].strDrink}
										</h4>
										<h5
											style={{
												fontStyle: 'italic',
												fontWeight: '300',
												marginBottom: '1.5rem',
											}}>
											{drink.drinks[0].strAlcoholic}
										</h5>

										<Image rounded src={drink.drinks[0].strDrinkThumb} fluid />
									</Card>
								</Col>
								<Col>
									<Card body bg={'light'} border={'dark'}>
										<h5 style={{ marginBottom: '1rem' }}>Ingredients:</h5>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure1}{' '}
											{drink.drinks[0].strIngredient1}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure2}{' '}
											{drink.drinks[0].strIngredient2}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure3}{' '}
											{drink.drinks[0].strIngredient3}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure4}{' '}
											{drink.drinks[0].strIngredient4}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure5}{' '}
											{drink.drinks[0].strIngredient5}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure6}{' '}
											{drink.drinks[0].strIngredient6}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure7}{' '}
											{drink.drinks[0].strIngredient7}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure8}{' '}
											{drink.drinks[0].strIngredient8}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure9}{' '}
											{drink.drinks[0].strIngredient9}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure10}{' '}
											{drink.drinks[0].strIngredient10}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure11}{' '}
											{drink.drinks[0].strIngredient11}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure12}{' '}
											{drink.drinks[0].strIngredient12}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure13}{' '}
											{drink.drinks[0].strIngredient13}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure14}{' '}
											{drink.drinks[0].strIngredient14}
										</p>
										<p style={{ marginBottom: '.2rem' }}>
											{drink.drinks[0].strMeasure15}{' '}
											{drink.drinks[0].strIngredient15}
										</p>
										<h5 style={{ marginTop: '2rem' }}>Glass to use:</h5>
										<p>{drink.drinks[0].strGlass}</p>
									</Card>
								</Col>
							</Row>
							<p style={{ marginTop: '2rem' }}>
								{drink.drinks[0].strInstructions}
							</p>
						</Card.Body>
					</Container>
				</Jumbotron>
				<Row style={{ marginTop: '-2rem' }}>
					<Col style={{ marginRight: '-1.9rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1554314591-31236f6872d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col style={{ marginRight: '-1.9rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1592934935867-14426f90d3de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col>
						<Image
							src='https://images.unsplash.com/photo-1568929218490-8d25a4332ec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
				</Row>
			</>
		);
};

export default Drink;