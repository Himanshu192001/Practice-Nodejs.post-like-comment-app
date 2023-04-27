const Post = require('../models/postModel');
const Comment = require('../models/commentModel');


exports.createComment = async (req , res) =>
{
    try{
        const {post , user , body} = req.body;
        const comment = new Comment({post , user , body});

        // comment saved in database
        const savedComment  = await comment.save();

        //updating the comments array in the post 
        // findByIdAndUpdate takes id and find the data and then $push operator update the data we 
        // we wanted to be updated new : true gives us the updated data in response
        // populate function will get us the data which is corresponding to the existing id n comment array 
        // exec() unction used to execute the query

        const updatedPost = await Post.findByIdAndUpdate(post , 
            {$push : {comments : savedComment._id}}
             , {new:true}).populate('comments').exec();


        res.status(200).json({
            success:true,
            data : updatedPost,
            message:"Comment created successfully"
        })
    }
    catch(error)
    {
        console.error(error);
        console.log(error);
        res.send(500).json({
            success:false,
            data:error.message,
            message:'Internal server error'
        })
    }
}