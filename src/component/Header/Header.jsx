import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 justify-between items-center mt-3 mb-8'>
            <h1 className='font-bold text-4xl'>Dev Cafe</h1>
            <div className='flex items-center gap-10 text-lg font-medium'>
                <a href="/home">Home</a>
                <a href="/blogs">Blogs</a>
                <a href="/user">
                    <div className={"h-[50px] w-[50px] bg-[url('https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1680208887~exp=1680209487~hmac=605fc28e53b109c924a0c4c3d745e7ea8aebe041f088f3b47f213c5f57925ce3')] bg-center bg-cover rounded-full"}></div>
                </a>
            </div>
        </div>
    );
};

export default Header;