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

    const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
    const handleBookmarkedBlogs = (blog) => {

        const newBookmarkedBlogs = [...bookmarkedBlogs, blog];
        const exists = bookmarkedBlogs.find(bookmarkedBlog => blog.id === bookmarkedBlog.id);
        if (!exists) {
            setBookmarkedBlogs(newBookmarkedBlogs);
        }
        else {
            console.log('already')
        }
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
                    bookmarkedBlogs={bookmarkedBlogs}
                ></Action>
            </div>
        </div>
    );
};

export default Main;