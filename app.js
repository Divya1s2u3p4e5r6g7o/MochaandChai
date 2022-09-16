const express=require('express');
const app=express();
const port=8089;
app.use('/user',require('./routes/users'))
 module.exports = app.listen(port,()=>{
     console.log(`App is listening at http://localhost:8089`)
})