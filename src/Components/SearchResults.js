import React from 'react';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactPlayer from 'react-player';
import './Styling/SearchResults.css'

const SearchResults = ({ dishes }) => {
    
    return (
			<div>
				{dishes.map((dish) => (
					<Accordion style={{ marginTop: '1rem' }}>
						<Accordion.Toggle
							as={Button}
							block
							variant='outline-dark'
							eventKey='0'>
							{dish.strMeal}
						</Accordion.Toggle>
						<Accordion.Collapse eventKey='0'>
							<Card.Body
								style={{
									border: 'solid',
									borderRadius: '10px',
                                    marginTop: '1rem',
                                    padding: '2.5rem'
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
												{dish.strMeal}
											</h4>
											<h5
												style={{
													fontStyle: 'italic',
													fontWeight: '300',
													marginBottom: '1.5rem',
												}}>
												{dish.strArea}
											</h5>
											<Image rounded src={dish.strMealThumb} fluid />
										</Card>
									</Col>
									<Col>
										<Card body bg={'light'} border={'dark'}>
											<h5 style={{ marginBottom: '1rem' }}>Ingredients:</h5>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure1} {dish.strIngredient1}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure2} {dish.strIngredient2}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure3} {dish.strIngredient3}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure4} {dish.strIngredient4}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure5} {dish.strIngredient5}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure6} {dish.strIngredient6}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure7} {dish.strIngredient7}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure8} {dish.strIngredient8}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure9} {dish.strIngredient9}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure10} {dish.strIngredient10}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure11} {dish.strIngredient11}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure12} {dish.strIngredient12}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure13} {dish.strIngredient13}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure14} {dish.strIngredient14}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure15} {dish.strIngredient15}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure16} {dish.strIngredient16}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure17} {dish.strIngredient17}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure18} {dish.strIngredient18}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure19} {dish.strIngredient19}
											</p>
											<p style={{ marginBottom: '.2rem' }}>
												{dish.strMeasure20} {dish.strIngredient20}
											</p>
										</Card>
									</Col>
								</Row>
								<p style={{ marginTop: '2rem' }}>{dish.strInstructions}</p>
								<Accordion>
									<Accordion.Toggle
										as={Button}
										variant='outline-dark'
										eventKey='1'>
										Video Tutorial
									</Accordion.Toggle>

									<Accordion.Collapse eventKey='1'>
										<Card.Body>
											<div className='player-wrapper'>
												<ReactPlayer
													className='react-player'
													url={dish.strYoutube}
													width='100%'
													height='100%'
													controls={true}
												/>
											</div>
										</Card.Body>
									</Accordion.Collapse>
								</Accordion>
							</Card.Body>
						</Accordion.Collapse>
					</Accordion>
				))}
			</div>
		);
};

export default SearchResults;