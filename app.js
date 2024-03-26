import express from 'express'
import layout from 'express-ejs-layouts'
import fileUpload from 'express-fileupload'
import QuestionRoute from './routes/QuestionRoute.js'
import path from 'path'

const app = express()
app.use(fileUpload())

app.use(layout)
app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.resolve('public')))

app.use('/' , QuestionRoute)

app.get('*', (req, res) => {
    return res.render('404.ejs')
})

app.listen(1020, () => console.log('http://localhost:1020'))
