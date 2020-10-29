import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Search = () => {
    const [dishes, setDishes] = useState('')
    const [search, setSearch] = useState('')
    

    function getMeals(searchString) {
        const url =
					`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                
                setDishes(res.meals)
                // setLastSearch(search)
                setSearch('')
            })
            .catch((error) => console.log(error));
    }

    function handleChange(event) {
        setSearch(event.target.value)
    }


    function handleSubmit(event) {
        event.preventDefault()
        getMeals(search)
    }

    // useEffect(() => {
    //     getMeals(search)
    // }, [])


    return (
			<>
				<Row>
					<Col style={{ marginRight: '-1.9rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col style={{ marginRight: '-1.9rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1590242926236-10d3db5187da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col>
						<Image
							src='https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
				</Row>
				<Jumbotron>
					<Container>
						<h2
							style={{
								marginTop: '-1rem',
								marginBottom: '2rem',
								borderBottom: 'solid',
								borderWidth: 'thin',
								paddingBottom: '.5rem',
							}}>
							Search
						</h2>
						<p>
							If you aren't feeling as spontaneous, or you know a bit more about
							what you want to create, try to search for the recipe below.
							Hopefully we have what you're looking for. The recipe list
							continues to grow, but we won't have every dish you can think of.
							You may also do a broad search, i.e. if you're in the mood for
							beef, search "beef", and you'll find plenty of options.
						</p>

						<Form onSubmit={handleSubmit}>
							<Form.Label style={{ marginBottom: '.75rem' }}>
								Search for food recipes below:
							</Form.Label>
							<Form.Control
								type='text'
								placeholder='ex: chicken or tandoori chicken'
								name='search'
								required
								onChange={handleChange}
								value={search}
							/>
							<Button
								block
								variant='dark'
								type='submit'
								style={{ marginTop: '1rem' }}>
								Search
							</Button>
						</Form>
						<div>
							{dishes !== null && dishes.length > 0 && (
								<SearchResults dishes={dishes} />
							)}
							{dishes === null && <p style={{marginTop: '1.5rem', color: 'red'}}>Sorry, try something else!</p>}
						</div>
					</Container>
				</Jumbotron>
				<Row style={{ marginTop: '-2rem' }}>
					<Col style={{ marginRight: '-1.9rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1562685108-b463727dc8a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col style={{ marginRight: '-1.9rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col>
						<Image
							src='https://images.unsplash.com/photo-1586985288123-2495f577c250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
				</Row>
				<Row style={{ marginTop: '-.05rem' }}>
					<Col style={{ marginRight: '-2rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1585238342070-61e1e768b1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col style={{ marginRight: '-1.9rem' }}>
						<Image
							src='https://images.unsplash.com/photo-1466027575040-12134f1397fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
					<Col>
						<Image
							src='https://images.unsplash.com/photo-1565808229224-264b6fcc5052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
							fluid
						/>
					</Col>
				</Row>
			</>
		);
};

export default Search;