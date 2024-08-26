import Header from './Components/Header/Header'
import './App.css'
import Recipes from './Components/Recipes/Recipes'
import { useEffect, useState } from 'react'

function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  }, [])

  return (
    <div className='mx-52 mt-10'>
      <Header></Header>
      <main className='mt-20'>
        <Recipes recipes={recipes} ></Recipes>
      </main>
    </div>
  )
}

export default App
