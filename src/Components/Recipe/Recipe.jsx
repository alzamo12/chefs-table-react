import PropTypes from 'prop-types'

const Recipe = ({recipe}) => {
    const {id} = recipe;
    return (
        <div>
            <h1>recipe: {id}</h1>
        </div>
    );
};

Recipe.propTypes ={
    recipe: PropTypes.object.isRequired
}

export default Recipe;