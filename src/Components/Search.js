import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
			<Jumbotron>
				<Container>
					<Form onSubmit={handleSubmit}>
                        <Form.Label>Search for food recipes below:</Form.Label>
						<Form.Control
							type='text'
							placeholder='ex: chicken or tandoori chicken'
							name='search'
							required
							onChange={handleChange}
							value={search}
						/>
						<Button block variant='dark' type='submit' style={{marginTop: '1rem'}}>Search</Button>
					</Form>
					<div>
						{dishes !== null && dishes.length > 0 && (
							<SearchResults dishes={dishes} />
						)}
						{dishes === null && <p>Sorry, try something else!</p>}
					</div>
				</Container>
			</Jumbotron>
		);
};

export default Search;