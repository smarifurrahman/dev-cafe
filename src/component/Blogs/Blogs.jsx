import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

const Blogs = ({ blogs }) => {
    console.log(blogs);
    const { id, title, author, datePosted, readTime, tags, coverImg, authorImg } = blogs;

    return (
        <div className='mb-8'>
            <div>
                <hr className='border-gray2 mb-8' />
                <img className='rounded-lg' src={coverImg} alt="cover photo" />
            </div>
            <div className='flex justify-between items-center mt-7'>
                <div className='flex items-center'>
                    <div className={"h-[80px] w-[80px] bg-[url('" + authorImg + "')] bg-center bg-cover rounded-full"}></div>
                    <div className='ml-6'>
                        <h3 className='font-bold text-xl mb-1'>{author}</h3>
                        <p className='text-secondary'>{datePosted}</p>
                    </div>
                </div>
                <p className='text-secondary mr-2 text-lg'>
                    <span className='mr-2'>{readTime} min read</span>
                    <FontAwesomeIcon icon={faBookmark} />
                </p>
            </div>
            <div>
                <h2 className='text-3xl font-bold my-4 leading-relaxed'>{title}</h2>
                <p>
                    {
                        tags.map((tag, index) => <span className='mr-4 text-secondary text-lg' key={index}>{tag}</span>)
                    }
                </p>
                <button className='text-tertiary font-semibold underline mt-5'>Mark as read</button>
            </div>
        </div>
    );
};

export default Blogs;