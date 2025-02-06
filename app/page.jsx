import React from 'react';
import prisma from '../lib/prisma'
async function getPosts() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true }
            }
        }
    })
    return posts;
}
export default async function page() {
    const posts = await getPosts()

    const Card = ({ title, description, date, time, author }) => {
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
                <div className="text-gray-600 mt-2">
                    {/* <p>{date}</p> */}
                    <p>{time}</p>
                    <p>{author}</p>
                </div>
            </div>
        );
    };


    return (
        <div className="flex bg-[#eceef9] min-h-screen flex-col items-center p-6 space-y-4">
            {posts?.map((post) => (
                <div key={post?.id}>
                    <Card
                        title={post?.title}
                        description={post?.content}
                        // date="Today"
                        time="17:00"
                        author={post?.author.name}
                    />
                </div>
            ))}
        </div>

    );
};

