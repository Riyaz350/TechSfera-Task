'use client'
import React, { useState, useEffect } from 'react';
import prisma from '../lib/prisma';
import Link from 'next/link';

async function getPosts() {
    const posts = await prisma?.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true }
            }
        }
    });
    return posts;
}

export default function Page() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const fetchedPosts = await getPosts();
            setPosts(fetchedPosts);
        };

        fetchPosts();
        const interval = setInterval(fetchPosts, 500);  

        return () => clearInterval(interval);  
    }, []);

    const Card = ({ title, description, date, time, author }) => {
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
                <div className="text-gray-600 mt-2">
                    <p>{date}</p>
                    <p>{time}</p>
                    <p>{author}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-[#eceef9] min-h-screen p-6">
            <header className="flex justify-between items-center bg-blue-500 p-4 text-white">
                <h1 className="text-xl font-bold">Posts</h1>
                <Link href="/pages/add-post" className="bg-white text-blue-500 p-2 rounded">
                    Add Posts
                </Link>
            </header>
            <div className="flex mt-6">
                <div className="bg-white shadow-md rounded p-4 w-full">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="text-start px-4 py-2">Title</th>
                                <th className="text-start px-4 py-2">Description</th>
                                <th className="text-start px-4 py-2">Date</th>
                                <th className="text-start px-4 py-2">Time</th>
                                <th className="text-start px-4 py-2">Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts?.map((post) => (
                                <tr key={post?.id} className="border-t">
                                    <td className="px-4 py-2">{post?.title}</td>
                                    <td className="px-4 py-2">{post?.content}</td>
                                    <td className="px-4 py-2">Today</td>
                                    <td className="px-4 py-2">17:00</td>
                                    <td className="px-4 py-2">{post?.author.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
