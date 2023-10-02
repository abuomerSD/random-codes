import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function publishPost(){
    const post = await prisma.post.update({
        where:{ id:1 ,},
        data: {
            published: true
        }
    })

    console.log(post)
}

publishPost();

async function updatePostContent(){
    const post = await prisma.post.update({
        where:{ id:1 },
        data: {
            content:''
        }
    })
}