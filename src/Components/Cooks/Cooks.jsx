import PropTypes from 'prop-types'
import Cook from '../Cook/Cook';
import Cookings from '../Cookings/Cookings';
import { useEffect, useState } from 'react';

const Cooks = ({ newRecipes, deleteData }) => {
    // console.log(newRecipes)
    const [updatedRecipes, setUpdatedRecipes] = useState(newRecipes);
    const [cookings, setCooking] = useState([]);
    useEffect(() => {
        setUpdatedRecipes(newRecipes)
    }, [newRecipes])
    console.log(updatedRecipes)


    const handleCooking = (currentlyCooking ) => {

        // if (currentlyCooking) {
            const newUpdatedRecipes = updatedRecipes.filter((recipe) => recipe.id !== currentlyCooking.id)
            setUpdatedRecipes(newUpdatedRecipes);



            const newCooking = [...cookings, currentlyCooking];
            setCooking(newCooking)

        deleteData(currentlyCooking)
        
    }
    return (
        <div className="w-[750px] h-auto border-black border-solid border-2">
            <h1 className='text-center text-2xl font-semibold mb-6 mt-6'>Want To Cook: {updatedRecipes.length}</h1>
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
                        updatedRecipes.map((newRecipe, idx) => <Cook key={idx} handleCooking={handleCooking} newRecipe={newRecipe}></Cook>)
                    }
                </tbody>

            </table>
            <Cookings cookings={cookings}></Cookings>
        </div>
    );
};

Cooks.propTypes = {
    newRecipes: PropTypes.array.isRequired,
    deleteData: PropTypes.func
}



export default Cooks;


// import PropTypes from 'prop-types';
// import Cook from '../Cook/Cook';
// import Cookings from '../Cookings/Cookings';
// import { useEffect, useState } from 'react';

// const Cooks = ({ newRecipes }) => {
//     const [updatedRecipes, setUpdatedRecipes] = useState(newRecipes);
//     const [cookings, setCooking] = useState([]);

//     useEffect(() => {
//         setUpdatedRecipes(newRecipes);
//     }, [newRecipes]);

//     const handleCooking = (currentlyCooking) => {
      
//             // Filter out the currently cooking recipe from updatedRecipes
//             const newUpdatedRecipes = updatedRecipes.filter(updatedRecipe => updatedRecipe.id !== currentlyCooking.id)
            
//             setUpdatedRecipes(newUpdatedRecipes)

//             // Add the currently cooking recipe to the cookings list
//             const newCooking = [...cookings, updatedRecipes];
//             setCooking(newCooking);
        
//     };

//     return (
//         <div className="w-[750px] h-auto border-black border-solid border-2">
//             <h1 className='text-center text-2xl font-semibold mb-6 mt-6'>
//                 Want To Cook: {updatedRecipes.length}
//             </h1>
//             <hr className='mx-16 mb-5' />
//             <table className='w-full'>
//                 <thead>
//                     <tr>
//                         <th className='px-4 py-2'>Name</th>
//                         <th className='px-4 py-2'>Time</th>
//                         <th className='px-4 py-2'>Calories</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         updatedRecipes.map((newRecipe) => (
//                             <Cook 
//                                 key={newRecipe.id} // Use a unique key prop
//                                 handleCooking={handleCooking} 
//                                 newRecipe={newRecipe} 
//                             />
//                         ))
//                     }
//                 </tbody>
//             </table>
//             <Cookings cookings={cookings}></Cookings>
//         </div>
//     );
// };

// Cooks.propTypes = {
//     newRecipes: PropTypes.array.isRequired
// };

// export default Cooks;
