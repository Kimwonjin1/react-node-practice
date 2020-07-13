const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000

mongoose.connect('mongodb+srv://dnjswls3399:wjdqhrtns1!@cluster0.ju0wx.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    userNewUrlParser: true, userUnifiedTopology: true, userCreateIndexx: true, userFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
    .catch(err => console.log(err)) // 에러 문구 보안하기위해 위 인자에 객체들을 사용 

    app.get('/', (req, res) => res.send('Hello World! 지금부터 앱 만들기 시작'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))