import React, { useState, useEffect } from 'react';

const Random = () => {
const [recipes, setRecipes] = useState()

useEffect(() => {
   const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

   fetch(url)
    .then((res) => res.json())
    .then((res) => {
        let recipes = res
        setRecipes(recipes)
        
    })
    .catch('Loading...')

}, [])

    return (
        <div>
            <button>Randomize!</button>
        </div>
    );
};

export default Random;