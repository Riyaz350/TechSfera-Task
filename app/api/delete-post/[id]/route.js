import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    const id = params?.id; // No need for `await` here
    console.log(id);
    try {
        const post = await prisma.post.delete({
            where: { id },
        });
        return NextResponse.json({ success: true, data: post });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
