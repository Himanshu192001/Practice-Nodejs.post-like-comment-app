const Post = require("../models/postModel");


exports.createPost = async (req , res) =>
{
    try{
        const {title , body } = req.body;
        const createdPost = await Post.create({title,body});

        res.status(200).json(
            {
                success:true,
                data:createdPost,
                message:"Post created successfully"
            }
        );
    }
    catch(error)
    {
        console.error(error);
        console.log(error);
        res.send(500).json({
            success:false,
            data:error.message,
            message:"Internal server error"
        })
    }
}