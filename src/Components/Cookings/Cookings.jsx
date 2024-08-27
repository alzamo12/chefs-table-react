import Cooking from "./Cooking/Cooking";
import PropTypes from 'prop-types'

const Cookings = ({cookings}) => {

    return (
        <div className=" text-center my-8  grid justify-center items-center">
            <h1 className='text-center text-2xl font-semibold p-6 mt-6'>Want To Cook: {cookings.length}</h1>
            <hr className='mx-16 mb-5' />
           <table className=''>
                <thead className="h-auto">
                <tr >
                    <th className='px-4 py-2'>Name</th>
                    <th className='px-4 py-2'>Time</th>
                    <th className='px-4 py-2'>Calories</th>
                </tr>
                </thead>
                <tbody className='space-y-20 h-auto'>
                    {
                        cookings.map(cooking => <Cooking key={cooking.id} cooking={cooking}></Cooking>)
                    }
                </tbody>
                
           </table>
        </div>
    );
};

Cookings.propTypes = {
    cookings: PropTypes.array.isRequired
}





export default Cookings;