import React, { useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Action from '../Actions/Action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyError, notifySuccess } from '../Toastify/Toastify';

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
            notifySuccess();
        }
        else {
            notifyError();
        }
    }

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-8'>
                <div className='lg:col-span-2'>
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
            <ToastContainer />
        </div>
    );
};

export default Main;