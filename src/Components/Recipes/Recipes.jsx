import Recipe from "../recipe/recipe";
import PropTypes from 'prop-types'

const Recipes = ({recipes}) => {
    
    return (
        <div>
            <h2 className="text-4xl text-black">{recipes.length}</h2>
            {
              recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} ></Recipe>)  
            }
        </div>
    );
};

Recipes.propTypes ={
    recipes: PropTypes.array.isRequired
}

export default Recipes;