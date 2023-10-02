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


async function updatePostContent(){
    const post = await prisma.post.update({
        where:{ id:1 },
        data: {
            content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
    })
    console.log(post);
}
publishPost()
    .catch( (err)=> console.log(err.message) )

updatePostContent()
    .catch( (err)=> console.log(err.message) )