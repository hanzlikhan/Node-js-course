const express = require('express');
const app = express();
const port = 3000; 
const path = require('path');
const {v4: uuidv4} = require('uuid');

const methodOverride = require('method-override');
// middleware 
// for pass encoded data 
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method')); // for handling POST, PUT, DELETE requests

app.set('view engine', 'ejs');
// set path for the view engine
app.set('views', path.join(__dirname, 'views'));   // for templates
app.use(express.static(path.join(__dirname, "public")));  // for the public directory to access any static files 


// make an array in which store data temporarily
let posts = [
    {
        id: uuidv4(),
        username: 'Hanzla',
        content: "i love coding"
    },
    {
        id: uuidv4(),
        username: 'irfan',
        content: "irfan is a doctor"
    },
    {
        id: uuidv4(),
        username: 'ali',
        content: "ali is a teacher"
    }
]
app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts})
})

// create a new post 

app.get('/posts/new', (req,res)=>{
    res.render('create.ejs');
})

app.get('/posts/:id', (req,res)=>{
   let {id} = req.params;
   let post = posts.find(p => id === p.id);
   console.log(post);
   
   res.render('show.ejs', {post});
   
})


app.post('/posts', (req,res)=>{
    // const {username, content} = req.body;
    // posts.push({username, content});
    // res.redirect('/posts');
    console.log(req.body);
    let {username, content} = req.body;
    //  create new id to implement post creation
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect('/posts'); 
})

app.patch('/posts/:id', (req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find(p => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect('/posts');
    
})

app.delete('/posts/:id', (req,res)=>{
    let {id} = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect('/posts');
})
app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;
    let post = posts.find(p => id === p.id);
    res.render('edit.ejs');
})
app.listen(port , ()=>{
    console.log('Server is running on port 3000');
})