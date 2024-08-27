import PropTypes from 'prop-types'
import Cook from '../Cook/Cook';
import Cookings from '../Cookings/Cookings';
import { useEffect, useState } from 'react';

const Cooks = ({newRecipes}) => {
    console.log(newRecipes)
   const [updatedRecipe, setUpdatedRecipe] = useState(newRecipes);
    useEffect(() => {
           setUpdatedRecipe(newRecipes) 
    }, [newRecipes])
    console.log(updatedRecipe)

    const [cookings, setCooking] = useState([]);
    const handleCooking = (currentlyCooking) => {
        const newCooking = [...cookings, currentlyCooking ];
        setCooking(newCooking)
    }
    return (
        <div className="w-[750px] h-auto border-black border-solid border-2">
            <h1 className='text-center text-2xl font-semibold mb-6 mt-6'>Want To Cook: {updatedRecipe.length}</h1>
            <hr className='mx-16 mb-5' />
           <table className=''>
                <thead>
                <tr >
                    <th className='px-4 py-2'>Name</th>
                    <th className='px-4 py-2'>Time</th>
                    <th className='px-4 py-2'>Calories</th>
                </tr>
                </thead>
                <tbody className='space-y-20'>
                {
                    updatedRecipe.map((newRecipe, idx) => <Cook key={idx} handleCooking={handleCooking} newRecipe={newRecipe}></Cook>)
                }
                </tbody>
                
           </table>
           <Cookings cookings={cookings}></Cookings>
        </div>
    );
};

Cooks.propTypes = {
    newRecipes: PropTypes.array.isRequired
}



export default Cooks;