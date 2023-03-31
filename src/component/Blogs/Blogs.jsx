import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

const Blogs = (props) => {
    const { id, title, author, datePosted, readTime, tags, coverImg, authorImg } = props.blog;

    const countReadTime = props.countReadTime;
    const handleBookmarkedBlogs = props.handleBookmarkedBlogs;

    return (
        <div className='mb-8'>
            <div>
                <hr className='border-gray2 mb-8' />
                <img className='rounded-lg' src={coverImg} alt="cover photo" />
            </div>
            <div className='flex flex-col md:flex-row gap-4 justify-between items-center mt-7'>
                <div className='flex items-center'>
                    <div>
                        <img className='h-[80px] w-[80px] rounded-full object-cover align-middle' src={authorImg} alt="author Image" />
                    </div>
                    <div className='ml-6'>
                        <h3 className='font-bold text-xl mb-1'>{author}</h3>
                        <p className='text-secondary'>{datePosted}</p>
                    </div>
                </div>
                <p className='text-secondary mr-2 text-lg'>
                    <span>{String(readTime).padStart(2, '0')} min read</span>
                    <button onClick={() => handleBookmarkedBlogs(props.blog)} className='p-2'>
                        <FontAwesomeIcon icon={faBookmark} />
                    </button>
                </p>
            </div>
            <div>
                <h2 className='text-2xl md:text-3xl font-bold my-3 md:!leading-normal'>{title}</h2>
                <p>
                    {
                        tags.map((tag, index) => <span className='mr-4 text-secondary text-lg block md:inline' key={index}>{tag}</span>)
                    }
                </p>
                <button onClick={() => countReadTime(readTime)} className='text-tertiary font-semibold underline mt-5'>Mark as read</button>
            </div>
        </div>
    );
};

export default Blogs;