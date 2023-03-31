import React from 'react';

const Blogs = ({ blogs }) => {
    console.log(blogs);
    const { id, title, author, datePosted, readTime, tags, coverImg, authorImg } = blogs;

    return (
        <div>
            <div>
                <img className='rounded-lg' src={coverImg} alt="cover photo" />
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className={"h-[80px] w-[80px] bg-[url('" + authorImg + "')] bg-center bg-cover rounded-full"}></div>
                    <div>
                        <h3 className='font-bold text-xl'>{author}</h3>
                        <p className='text-secondary'>{datePosted}</p>
                    </div>
                </div>
                <p className='text-secondary'>{readTime} min read</p>
            </div>
            <div>
                <h2 className='text-3xl font-bold'>{title}</h2>
                <p>
                    {
                        tags.map((tag, index) => <span className='mr-4 text-secondary text-lg' key={index}>{tag}</span>)
                    }
                </p>
                <button className='text-tertiary underline'>Mark as read</button>
            </div>
        </div>
    );
};

export default Blogs;