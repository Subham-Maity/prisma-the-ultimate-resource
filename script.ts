import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // create a new user with some email, name, birthYear and likes
    const user = await prisma.user.create({
        data: {
            email: 'raja@gmail.com',
            name: 'Raja',
            birthYear: 1995,
        },
    })
    console.log(user)

    // create a new post with some rating, dates, views, comments, title and content
    const post = await prisma.post.create({
        data: {
            rating: 4.5,
            createdAt: new Date(),
            updatedAt: new Date(),
            views: 100,
            comments: 10,
            title: 'My first post',
            content: 'Hello, this is my first post. I hope you like it.',
        },
    })
    console.log(post)

}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
            await prisma.$disconnect()
        }
    )
