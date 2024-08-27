import Recipe from "../recipe/recipe";
import PropTypes from 'prop-types'

const Recipes = ({recipes, handleWantToCook}) => {
    
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 mx-10 md:w-2/3 gap-5">
            {
              recipes.map(recipe => <Recipe key={recipe.id} handleWantToCook={handleWantToCook} recipe={recipe} ></Recipe>)  
            }
        </div>
    );
};

Recipes.propTypes ={
    recipes: PropTypes.array.isRequired,
    handleWantToCook: PropTypes.func
}

export default Recipes;