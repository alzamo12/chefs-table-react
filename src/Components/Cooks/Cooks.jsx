import PropTypes from 'prop-types'
import Cook from '../Cook/Cook';

const Cooks = ({newRecipes}) => {
    return (
        <div className="w-[600px] h-auto border-black border-solid border-2">
           <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                {
                    newRecipes.map((newRecipe, idx) => <Cook key={idx} newRecipe={newRecipe}></Cook>)
                }
                </tbody>
           </table>
        </div>
    );
};

Cooks.propTypes = {
    newRecipes: PropTypes.array.isRequired
}



export default Cooks;