import React from "react"
import { useEffect, useState } from "react"
import Comment from "./Comment.jsx"
import axios from "axios"
import dataConst from "../constants/data.json"


function Discussion({ url }) {
    const [comments, setComments] = useState([])
    const pythonApiEndpoint = dataConst.pythonApiEndpoint

    async function getComments() {
        
        const discussionEndpoint = `${pythonApiEndpoint}/discussions/www.proposal1.com`
        console.log("getting comments", discussionEndpoint)
        
        const response = await axios.get(discussionEndpoint)
        console.log("got comments", response.data)
        let comments = response.data.discussion.comments

        comments = comments.map(comment => {
            comment.author = comment.author_address // renaming
            // adding mock likes, dislikes, and replies to comments data
            comment.likes = 0
            comment.dislikes = 0
            comment.replies = []
            return comment
        })

        setComments(comments)
    }

    useEffect(() => {
        //TODO:  get comments from backend server using proposal url on load
        getComments()
        console.log(comments)
    }, [])

    return (
        <div className="discussionContainer">
            {/* TODO: pass whatever  */}
            <Comment newComment={true} />

            {comments.map(({ author, content, likes, dislikes, replies }) => (
                <Comment
                //TODO: get this from url
                    discussion_url="www.proposal1.com" 
                    content={content}
                    author={author}
                    likes={likes}
                    dislikes={dislikes}
                    replies={replies}
                    newComment={false}
                    getComments={getComments} //to change Discussion's state from Comment component
                />
            ))}

        </div>
    )
}

export default Discussion