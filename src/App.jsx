import Header from './Components/Header/Header'
import './App.css'
import Recipes from './Components/Recipes/Recipes'
import Cooks from './Components/Cooks/Cooks'
import { useEffect, useState } from 'react'

function App() {

  const [recipes, setRecipes] = useState([]);
  const [newRecipes, setNewRecipe] = useState([]);

  useEffect(() => {
    fetch('recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  }, [])

  const handleWantToCook = (recipe) => {
    if(newRecipes.includes(recipe)){
      alert('Fuck You')
      return
    }
    const newRecipeArr = [...newRecipes, recipe ];
    setNewRecipe(newRecipeArr)
  }

  return (
    <div className='mx-52 mt-10'>
      <Header></Header>
      <main className='mt-20 flex'>
        <Recipes recipes={recipes} handleWantToCook={handleWantToCook} ></Recipes>
        <Cooks newRecipes={newRecipes}></Cooks>
      </main>
    </div>
  )
}

export default App
