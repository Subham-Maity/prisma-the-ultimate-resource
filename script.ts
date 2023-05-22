import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    await prisma.user.deleteMany()
    const user = await prisma.user.create({
        data: {
            name: 'Subham',
            email: 'maitysubham4041@gmail.com',
            age: 21,
            userPreference: {
                create: {
                    emailUpdates: true,
                },
            },

        },
        include: {
            userPreference: true,
        }

    })
    console.log(user)

}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
            await prisma.$disconnect()
        }
    )
