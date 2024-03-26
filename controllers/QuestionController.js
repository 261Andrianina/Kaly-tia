import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
import path from "path"
const home = async(req , res) => {
    try {
        const questions = await prisma.question.findMany({orderBy: {question_id:'desc'}})
        return res.render('home.ejs' , {questions:questions})
    } catch (error) {
        return res.render('500.ejs')        
    }
}
const addQuestion = async(req , res) => {
    try {
        switch (req.method) {
            case "GET": {
                return res.render('add-question.ejs', {error: undefined})
            }
            case "POST": {
                const {username , question, content} = req.body
                let error = null

                if(!username || !question || !content) {
                    error = "Veuiller remplir le champs!"
                }

                if( error != null ){
                    return res.render('add-question.ejs' , {error:error})
                }

                const createdQuestion = await prisma.question.create({
                    data:{
                        question: question,
                        content: content,
                        username: username
                    }
                })

                return res.redirect(`/view/question/${createdQuestion.question_id}`)

            }
        }

    } catch (error) {
        return res.render('500.ejs')
    }
}

const viewQuestion = async(req , res) => {
    try {
        const id = parseInt(req.params.id)
        const question = await prisma.question.findUnique({
            where: {
                question_id: id
            },
            include: {
                answer: true
            }
        })
        return res.render('view-question.ejs', {question:question})
    } catch (error) {
        return res.render('500.ejs')
    }
}
const like = async(req, res) =>{
    try {
        await prisma.like.create({
            data:{
                likeValue: 1,
            }
        })
    } catch (error) {
        console.log(error);
    }
}


export {home, viewQuestion , addQuestion, like}