import React from 'react';

const Action = () => {
    return (
        <div>
            <h3 className='bg-tertiary2 text-tertiary font-bold text-xl rounded-lg p-5 text-center mt-8'>Spent time on read: min</h3>
            <div className='bg-gray my-6 rounded-lg p-8'>
                <h3 className='font-bold text-xl'>Bookmarked Blogs: </h3>
                {
                    <h5 className='font-semibold text-lg p-5 bg-white rounded-lg my-4'>Master Microsoft Power Platform and Become an In-Demand!</h5>
                }
            </div>
        </div>
    );
};

export default Action;