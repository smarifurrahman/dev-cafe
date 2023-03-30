import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center mt-3 mb-8'>
            <h1 className='font-bold text-4xl'>Dev Cafe</h1>
            <div className='flex gap-10 text-lg font-medium'>
                <a href="/home">Home</a>
                <a href="/blogs">Blogs</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;