import React from 'react';

const Action = (props) => {
    const totalTime = props.totalTime;
    const bookmarkedBlogs = props.bookmarkedBlogs;

    return (
        <div className='sticky top-8'>
            <h3 className='bg-tertiary2 text-tertiary font-bold text-xl rounded-lg p-5 text-center mt-8 border border-tertiary'>Spent time on read: {totalTime} min</h3>
            <div className='bg-gray my-6 rounded-lg p-8'>
                <h3 className='font-bold text-xl'>Bookmarked Blogs: {bookmarkedBlogs.length}</h3>
                {
                    bookmarkedBlogs.map(bookmarkedBlog => <h5 key={bookmarkedBlog.id} className='font-semibold text-lg p-5 bg-white rounded-lg my-4'>{bookmarkedBlog.title}</h5>)
                }
            </div>
        </div>
    );
};

export default Action;