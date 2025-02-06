import React from 'react';
import prisma from '../lib/prisma'
async function getPosts() {
    const posts = await prisma.post.findMany({
        where:{published: true},
        include:{
            author:{
                select:{name:true}
            }
        }
    })
    return posts;
}
export default async function page  ()  {
    const posts = await getPosts()
    console.log(posts)
    return (
        <div>
            <p>feed</p>
        </div>
    );
};

 