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

    return (
        <div className='grid grid-cols-3 gap-6 my-8'>
            <div className='col-span-2'>
                {
                    blogs.map(blog => <Blogs
                        blogs={blog}
                        key={blog.id}
                    ></Blogs>)
                }
            </div>
            <div>
                <Action></Action>
            </div>
        </div>
    );
};

export default Main;