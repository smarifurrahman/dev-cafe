import React from 'react';
import Blogs from '../Blogs/Blogs';
import Action from '../Actions/Action';

const Main = () => {
    return (
        <div className='grid grid-cols-3 my-8'>
            <div className='col-span-2'>
                <Blogs></Blogs>
            </div>
            <div>
                <Action></Action>
            </div>
        </div>
    );
};

export default Main;