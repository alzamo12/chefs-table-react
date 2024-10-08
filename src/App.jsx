import Header from './Components/Header/Header'
import './App.css'
import Recipes from './Components/Recipes/Recipes'
import Cooks from './Components/Cooks/Cooks'
import { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';


function App() {

  const [recipes, setRecipes] = useState([]);
  const [newRecipes, setNewRecipe] = useState([]);

  useEffect(() => {
    fetch('recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  }, [])
  // console.log(newRecipes)

  const handleWantToCook = (recipe) => {
    if(newRecipes.includes(recipe)){
      toast('This Recipe Can not be selected')
      return
    }
    const newRecipeArr = [...newRecipes, recipe ];
    setNewRecipe(newRecipeArr)
  }

  const deleteData = (currentlyCooking) => {
    if(currentlyCooking){
      const newCurrentlyCooking = newRecipes.filter(newRecipe => newRecipe.id !== currentlyCooking.id)
      setNewRecipe(newCurrentlyCooking)
    }
  }
  // console.log(newRecipes)

  return (
    <div className='md:mx-52 md:mt-10'>
      <Header></Header>
      <main className='md:mt-20 md:flex  gap-5'>
        <Recipes recipes={recipes} handleWantToCook={handleWantToCook} ></Recipes>
        <Cooks deleteData={deleteData} newRecipes={newRecipes}></Cooks>
      </main>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
