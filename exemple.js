import { PrismaClient } from "@prisma/client";

const database = new PrismaClient()

const select = async() => {
    try {
        const question = await database.question.findMany()
        console.log('other next');
    }catch(error){
        console.log(error);
    }

    database.question.findMany()
    .then((question) =>{
        console.log(question);
    })
    .catch((error) => {
        console.log(error);
    })
    console.log('next');
}











// async et await
// thrn et catch