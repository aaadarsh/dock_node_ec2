let express = require('express');
let app = express();
let fs = require('fs')
let path = require('path')
let CustomEvent_new = require('./events_file')
let lodash = require('./lodash')
// let {readFileSync} = require('fs')
// console.log(readFileSync)
// console.log(path.resolve(__dirname, "..", "test.js"))    //relative path of the directory 
// console.log(path.join(__dirname, "..", "file.txt", "test.js"))

/*
//Lodash usage and demo
const _ = require("lodash")

let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);
console.log(fel, lel)
*/
// console.log(module)
// console.log(fs)

app.get('/', (req, res)=>{
    res.send('Home page')
})
const port = process.env.PORT || 3000;
//server 
app.listen(port, ()=>{
    console.log('Server started 🚀🚀');
})

