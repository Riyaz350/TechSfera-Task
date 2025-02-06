'use client'   
import React from 'react';
import { useRouter } from "next/navigation";   

const DeletePost = ({ id }) => {   
    const router = useRouter();

    const handleDelete = async () => {   
        try {
            await fetch(`/api/delete-post/${id}`, { method: 'DELETE' });
            router.refresh();   
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <td onClick={handleDelete} className='flex pl-6 cursor-pointer'>
            ❌
        </td>
    );
};

export default DeletePost;
