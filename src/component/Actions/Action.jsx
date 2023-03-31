import React from 'react';

const Action = (props) => {
    const totalTime = props.totalTime;
    const bookmarked = props.bookmarked;

    return (
        <div className='sticky top-8'>
            <h3 className='bg-tertiary2 text-tertiary font-bold text-xl rounded-lg p-5 text-center mt-8'>Spent time on read: {totalTime} min</h3>
            <div className='bg-gray my-6 rounded-lg p-8'>
                <h3 className='font-bold text-xl'>Bookmarked Blogs: </h3>
                {
                    bookmarked.map(blog => <h5 key={blog.id} className='font-semibold text-lg p-5 bg-white rounded-lg my-4'>{blog.title}</h5>)
                }
            </div>
        </div>
    );
};

export default Action;