import React from "react"
import { useEffect, useState } from "react"

import "./Comment.css"
import dataConst from "../constants/data.json"
import axios from "axios"

function Comment({
    discussion_url,
    content,
    author,
    likes,
    dislikes,
    replies,
    newComment,
    getComments,
}) {
    const pythonApiEndpoint = dataConst.pythonApiEndpoint


    const [triggeredPost, setTriggeredPost] = useState(false)

    const [commentLikes, setCommentLikes] = React.useState(likes)
    const [commentDislikes, setCommentDislikes] = React.useState(dislikes)
    const [commentReplies, setCommentReplies] = React.useState(replies)

    // form to add new comment
    const [newCommentContent, setNewCommentContent] = React.useState("")

    useEffect(() => {
        //post comment to backend
        console.log("getcomment in usefefct", typeof(getComments))
        if (triggeredPost) {
            getComments()
        }
        else {
            console.log("not triggered")
        }

    }, [triggeredPost])

    async function handlePostComment(e) {
        const hi = "www.proposal1.com"
        e.preventDefault()
        try {
            let newCommentApiEndpoint = `${pythonApiEndpoint}/discussions/${hi}`
            console.log(`trying to post comment to discussion : ${newCommentApiEndpoint}`)
            const response = await axios.post(newCommentApiEndpoint, {
                content: newCommentContent,
                author_address: "0x1234567890", //TODO: get author address from MM
            })
            console.log("posted comment", response.data)

            // update Discussion's state
            // console.log("getcomments is?" , typeof(fun))
            setTriggeredPost(true)
            await getComments()
            setTriggeredPost(false)
            
        
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="commentContainer">
            {newComment ? (
                <form onSubmit={handlePostComment}>
                <div className="commentContainer">
                    <div className="commentLEFT">
                        <div className="profilePicture">pfp</div>
                    </div>
                    <div className="commentRIGHT">
                        <div className="commentHeader">
                            <div className="commentAuthor">self.address</div>
                        </div>
                        <div className="commentContent">
                            <input type="text" placeholder="Tell other's what you think" onChange={(e) => setNewCommentContent(e.target.value)} />
                        </div>
                        <div className="commentFooter">
                            <div className="commentPost">
                                <button type="submit">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            ) : (
                <div className="commentContainer">
                    <div className="commentLEFT">
                        <div className="profilePicture">pfp</div>
                    </div>
                    <div className="commentRIGHT">
                        <div className="commentHeader">
                            <div className="commentAuthor">{author}</div>
                        </div>
                        <div className="commentContent">{content}</div>
                        <div className="commentFooter">
                            <div className="commentLikes">{likes}</div>
                            <div className="commentDislikes">{dislikes}</div>
                            <div className="commentReplies">
                                {replies.length} replies
                            </div>
                            <div className="commentReply">reply</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Comment
