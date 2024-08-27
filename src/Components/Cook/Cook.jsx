import PropTypes from 'prop-types'

const Cook = ({newRecipe, handleCooking}) => {
    const {name, time, calories} = newRecipe;
    return (
        <tr className='mt-4 bg-[#ecebeb]'>
            <th className='px-1 py-2'>{name}</th>
            <th className='px-1 py-2'>{time}</th>
            <th>{calories}</th>
            <th><button onClick={() => handleCooking(newRecipe)} className='bg-[#0BE58A] text-black text-md font-medium md:px-5 px-2 md:py-3 py-1s rounded-3xl md:w-48 w-auto'>Preparing</button></th>
        </tr>
    );
};

Cook.propTypes = {
    newRecipe: PropTypes.object.isRequired,
    handleCooking: PropTypes.func
}

export default Cook;