import PropTypes from 'prop-types'

const Recipe = ({recipe, handleWantToCook}) => {
    const {image, name, description, ingredients, time, calories} = recipe;
    return (
        <div className='p-5 space-y-5 border-black border-solid border-[1px] flex flex-col'>
            <img className='w-80 h-52' src={image} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
            <hr />
            <h3>Ingredients: {ingredients.length}</h3>
            <ul className='list-decimal ml-7'>
            {
                ingredients.map(( ingredient, idx) => <li key={idx}>{ingredient}</li>)
            }
            </ul>
            <hr />
            <div className='flex gap-10'>
                <h1>{time}</h1>
                <h1>{calories}</h1>
            </div>
            <button onClick={() => handleWantToCook(recipe)} className='bg-[#0BE58A] text-black text-md font-medium px-5 py-3 rounded-3xl w-48'>Want to Cook</button>
        </div>
    );
};

Recipe.propTypes ={
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func
}

export default Recipe;