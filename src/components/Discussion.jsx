import React from "react"
import { useEffect, useState } from "react"
import Comment from "./Comment.jsx"
import axios from "axios"
import dataConst from "../constants/data.json"
import ProfilePicture from "./ProfilePicture.jsx"

function Discussion({ proposalUrl }) {
    // proposalUrl: Ipfs api endpoint prefix + ipfs hash of proposal
    
    const pythonApiPrefix = dataConst.pythonApiPrefix
    const discussionEndpoint = `${pythonApiPrefix}/discussions/${proposalUrl}`
    const [comments, setComments] = useState([])
    const [newCommentContent, setNewCommentContent] = useState("")


    async function getComments() {
        console.log("getting comments", discussionEndpoint)

        const response = await axios({
            method: "get",
            url: discussionEndpoint,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        })

        console.log("got comments", response.data)
        let comments = response.data.discussion.comments
     
        comments = comments.map((comment) => {
            comment.author = comment.author_address // renaming
            // adding mock likes, dislikes, and replies to comments data
            comment.likes = 0
            comment.dislikes = 0
            comment.replies = []
            return comment
        })

        setComments(comments)
    }

    async function handlePostComment(e) {

        //TODO URL
        const hi = "www.proposal1.com"
        e.preventDefault()
        try {
            console.log(
                `trying to post comment to discussion : ${discussionEndpoint}`
            )
            const response = await axios.post(discussionEndpoint, {
                content: newCommentContent,
                author_address: "0x1234567890", //TODO: get author address from MM
            })

            console.log("posted comment", response.data)

            getComments()

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        //TODO:  get comments from backend server using proposal url on load
        getComments()
        console.log(comments)
    }, [])

    return (
        <div className="discussionContainer">
            {/* TODO: pass whatever  */}
        <div className="headingCommentsTop">Comments</div>
            <form onSubmit={handlePostComment}>
                <div className="commentContainer">
                    <div className="commentLEFT">
                        <div className="profilePicture"><ProfilePicture address={" "}/></div>
                    </div>
                    <div className="commentRIGHT">
                       

                        <div className="commentContent">
                            <input
                                type="text"
                                placeholder="Tell other's what you think"
                                onChange={(e) =>
                                    setNewCommentContent(e.target.value)
                                }
                                className="inputContainer"
                            />
                        </div>
                        <div className="commentFooter">
                            <div className="commentPost">
                                <button className="commentButton" type="submit">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {comments
                .map(({ author, content, likes, dislikes, replies }) => (
                    <Comment
                        //TODO: get this from url
                        discussion_url="www.proposal1.com"
                        content={content}
                        author={author}
                        likes={likes}
                        dislikes={dislikes}
                        replies={replies}
                    />
                ))
                .reverse()}
        </div>
    )
}

export default Discussion
