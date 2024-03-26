import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


const addAnswer = async(req , res) => {
    try {
        const {username , content, question_id} = req.body
        await prisma.answer.create({
            data: {
                content: content,
                username: username,
                question_id: parseInt(question_id)
            }
        })
        return res.redirect(`/view/question/${question_id}`)
    } catch (error) {
        return res.render('500.ejs')
    }
}

export default addAnswer