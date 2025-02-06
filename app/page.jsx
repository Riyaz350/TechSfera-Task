import React from 'react';
import ReadPost from './components/ReadPost';
import WritePost from './components/WritePost';

const page = () => {
    return (
        <div className='lg:flex w-full'>
            <div className='flex-grow'>
                <ReadPost />
            </div>
            <div className='flex-grow'>
                <WritePost />
            </div>
        </div>

    );
};

export default page;