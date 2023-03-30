import React from 'react';

const Blogs = ({ blogs }) => {
    console.log(blogs);
    const { id, title, author, datePosted, readTime, tags, coverImg, authorImg } = blogs;

    return (
        <div>
            <div>
                <img src={coverImg} alt="cover photo" />
            </div>
            <div>
                <div>
                    <img src={authorImg} alt="author photo" />
                    <div>
                        <h3>{author}</h3>
                        <p>{datePosted}</p>
                    </div>
                </div>
                <p>{readTime} min read</p>
            </div>
            <div>
                <h2>{title}</h2>
                {
                    tags.map((tag, index) => <p key={index}>{tag}</p>)
                }
                <p>Mark as read</p>
            </div>
        </div>
    );
};

export default Blogs;