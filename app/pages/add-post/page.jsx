'use client'
import React, { useState } from 'react';

const page = () => {
         const [title, setTitle] = useState('');
        const [content, setContent] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission logic here
            console.log({ title, content });
        };
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-2">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                        Content
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default page;