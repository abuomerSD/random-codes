import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.user.create({
        data :{
            name: 'Eltayeb 2',
            email: "tayeb1293-2@yahoo.com",
            posts: {
                create : { title: 'Hello World' }
            },
            profile: {
                create: { bio: 'I love Turtles' }
            },
        },
})
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        }
    });
    console.log('added');
    console.dir(allUsers,  { depth: null });
}

main()
    .then( async ()=>{
        await prisma.$disconnect();
    } )
    .catch(async (err) => {
        console.error(err.message);
        await prisma.$disconnect();
        process.exit(1);
    } );