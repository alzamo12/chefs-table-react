import PropTypes from 'prop-types'

const Cook = ({newRecipe}) => {
    const {name, time, calories} = newRecipe;
    return (
        <tr>
            <th>{name}</th>
            <th>{time}</th>
            <th>{calories}</th>
            <th><button className='bg-[#0BE58A] text-black text-md font-medium px-5 py-3 rounded-3xl w-48'>Preparing</button></th>
        </tr>
    );
};

Cook.propTypes = {
    newRecipe: PropTypes.object.isRequired
}

export default Cook;