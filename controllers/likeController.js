const Like = require('../models/likeModel');
const Post = require('../models/postModel');

exports.createLike = async (req , res) =>
{
    try{
        const {post , user} = req.body;
        const like = new Like({post , user});
        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post , {$push: {likes : savedLike._id}} , {new:true}).populate('likes').populate("comments").exec();

        res.status(200).json(
            {
                success:true ,
                data : updatedPost,
                message : "Post liked successfully"
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