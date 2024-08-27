import PropTypes from 'prop-types'

const Cook = ({newRecipe, handleCooking}) => {
    const {name, time, calories} = newRecipe;
    return (
        <tr className='mt-4 bg-[#ecebeb]'>
            <th className='px-4 py-2'>{name}</th>
            <th className='px-4 py-2'>{time}</th>
            <th>{calories}</th>
            <th><button onClick={() => handleCooking(newRecipe)} className='bg-[#0BE58A] text-black text-md font-medium px-5 py-3 rounded-3xl w-48'>Preparing</button></th>
        </tr>
    );
};

Cook.propTypes = {
    newRecipe: PropTypes.object.isRequired,
    handleCooking: PropTypes.func
}

export default Cook;