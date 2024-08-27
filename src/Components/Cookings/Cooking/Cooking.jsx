import PropTypes from 'prop-types'


const Cooking = ({ cooking }) => {
    const { name, time, calories } = cooking;
    console.log(cooking)
    return (

        <tr className='mt-4 bg-[#ecebeb]'>
            <th className='px-4 py-2'>{name}</th>
            <th className='px-4 py-2'>{time}</th>
            <th>{calories}</th>

        </tr>

    );
};

Cooking.propTypes = {
    cooking: PropTypes.object.isRequired
}

export default Cooking;