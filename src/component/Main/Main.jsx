import React, { useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Action from '../Actions/Action';
import { data } from 'autoprefixer';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    useState(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const [totalTime, setTotalTime] = useState(0);
    const countReadTime = (readTime) => {
        setTotalTime(totalTime + readTime);
    }

    const [bookmarked, setBookmarked] = useState([]);
    const handleBookmarkedBlogs = (blog) => {
        const newBookmarked = [...bookmarked, blog];
        setBookmarked(newBookmarked);
    }

    return (
        <div className='grid grid-cols-3 gap-6 my-8'>
            <div className='col-span-2'>
                {
                    blogs.map(blog => <Blogs
                        blog={blog}
                        key={blog.id}
                        countReadTime={countReadTime}
                        handleBookmarkedBlogs={handleBookmarkedBlogs}
                    ></Blogs>)
                }
            </div>
            <div>
                <Action
                    totalTime={totalTime}
                    bookmarked={bookmarked}
                ></Action>
            </div>
        </div>
    );
};

export default Main;