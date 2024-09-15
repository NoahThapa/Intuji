    const express = require('express')
    require('dotenv').config();
    const app = express();
    const port = process.env.PORT;
    const connectDB =  require("./Config/db")
    const Blog = require('./models/Blog')
    app.use(express.json()); // parsing JSON file in JS objects.

    connectDB(); // connecting with database

    // creating an API...


    // to add a blog.
    app.post('/add', async(req,res)=>{
        const {title, description, category}= req.body;
        try{
            const newBlog = new Blog({
                title,
                description,
                category
            })
            await newBlog.save();
            res.status(201).json(newBlog);

        } catch{
            res.status(500).json({msg:'server error'});

        }

    })

    // to retrieve all the blog posts.
    app.get('/all',async(req,res) => {
        try{
            const blogs = await Blog.find();
            res.status(200).json(blogs); 
        }
        catch(error){
            res.status(500).json({msg:'server error'})
        }
    }

    )

    // to retrive blog by an ID,
    app.get('/blog/:id', async(req,res)=>{
        try{
            const  blog = await Blog.findById(req.params.id);
            if (!blog){
                return res.status(404).json({msg: "Blog not found!"})
            }
            res.status(200).json(blog)

        } catch(error)
        {
            res.status(500).json({ msg: 'Server error' });

        }
    
    });


    // TO update blog post by an id.
    app.put('/blog/:id', async(req,res) =>{
        try{
            const update = await Blog.findByIdAndUpdate(
                req.params.id,  // find blog by ID
                req.body,  // update  new blog with data (from the request body)
                { new: true, runValidators: true }  // return the updated blog and run validation on update
            )

        if (!update) return res.status(404).json({ message: 'Blog not found' });
        res.status(200).json(update);    
        } catch(error)
        {
            res.status(500).json({msg:'Server Error'})
        }
    })






    app.listen(port,()=>{
        console.log(`Server is running in ${port}`)
    });

