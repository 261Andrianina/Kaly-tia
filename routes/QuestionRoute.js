import express from "express"
import addAnswer from "../controllers/AnswerControllers.js"
import { addQuestion, home, viewQuestion, like } from "../controllers/QuestionController.js"

const QuestionRoute = express.Router()

QuestionRoute.get('/' , home)
QuestionRoute.get('/view/question/:id', viewQuestion)
QuestionRoute.get('/question/add', addQuestion)
QuestionRoute.post('/question/add', addQuestion)
QuestionRoute.post('/answer/add', addAnswer)
QuestionRoute.get('/like', like)


export default QuestionRoute

