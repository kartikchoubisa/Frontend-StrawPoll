import React from "react"
import { useEffect, useState } from "react"
import Comment from "./Comment.jsx"

function Discussion({ url }) {
    const [comments, setComments] = useState([
        {
            content: "good good",
            author: "0x123",
            likes: "4",
            dislikes: "2",
            replies: [
                {
                    content: "no, bad",
                    author: "0x123",
                    likes: "5",
                    dislikes: "3",
                    replies: [],
                },
            ],
        },
    ])

    useEffect(() => {
        //TODO:  get comments from backend server using proposal url on load
        console.log(comments)
    }, [])

    return (
        <div className="discussionContainer">
            {/* TODO: pass whatever  */}
            <Comment newComment={true} />

            {comments.map(({ author, content, likes, dislikes, replies }) => (
                <Comment
                    content={content}
                    author={author}
                    likes={likes}
                    dislikes={dislikes}
                    replies={replies}
                    newComment={false}
                />
            ))}

        </div>
    )
}

export default Discussion
